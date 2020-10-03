import { getRepository } from 'typeorm';
import UserAddressData from '../entities/UserAddressData';
import UserContactData from '../entities/UserContactData';
import UserPersonalData from '../entities/UserPersonalData';
import CrudeDataRepository from '../repositories/CrudeDataRepository';

class StoreDataService {
  private crudeDataRepository: CrudeDataRepository;

  constructor(crudeDataRepository: CrudeDataRepository) {
    this.crudeDataRepository = crudeDataRepository;
  }

  public async execute(): Promise<UserPersonalData[]> {
    const crudeData = this.crudeDataRepository.getCrudeData();
    const personalDataRepository = getRepository(UserPersonalData);
    const addressDataRepository = getRepository(UserAddressData);
    const contactDataRepository = getRepository(UserContactData);

    const userDataList = await Promise.all(
      crudeData.map(async data => {
        const contactData = contactDataRepository.create({
          email: data.email,
          phone: data.phone,
          website: data.website,
        });
        const userContact = await contactDataRepository.save(contactData);

        const addressData = addressDataRepository.create({
          street: data.address.street,
          suite: data.address.suite,
          city: data.address.city,
          zipcode: data.address.zipcode,
          lat: data.address.geo.lat,
          lng: data.address.geo.lng,
        });
        const userAddress = await addressDataRepository.save(addressData);

        const personalData = personalDataRepository.create({
          name: data.name,
          username: data.username,
          address_id: userAddress.id,
          contact_id: userContact.id,
        });
        const userData = personalDataRepository.save(personalData);
        return userData;
      }),
    );
    return userDataList;
  }
}
export default StoreDataService;
