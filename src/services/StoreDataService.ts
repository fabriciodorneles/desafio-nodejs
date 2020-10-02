import { getRepository } from 'typeorm';
// import UserAddressData from '../entities/UserAddressData';
import UserContactData from '../entities/UserContactData';
// import UserPersonalData from '../entities/UserPersonalData';
import CrudeDataRepository from '../repositories/CrudeDataRepository';

class StoreDataService {
  private crudeDataRepository: CrudeDataRepository;

  constructor(crudeDataRepository: CrudeDataRepository) {
    this.crudeDataRepository = crudeDataRepository;
  }

  public async execute(): Promise<any[]> {
    const crudeData = this.crudeDataRepository.getCrudeData();
    // const personalDataRepository = getRepository(UserPersonalData);
    // const addressDataRepository = getRepository(UserAddressData);
    const contactDataRepository = getRepository(UserContactData);

    crudeData.map(async data => {
      const contactData = contactDataRepository.create({
        email: data.email,
        phone: data.phone,
        website: data.website,
      });
      await contactDataRepository.save(contactData);
      //   const adressData = addressDataRepository.create({
      //     street: data.street,
      //     suite: data.suite,
      //     city: data.city,
      //     zipcode: data.zipcode,
      //     lat: data.lat,
      //     lng: data.lng,
      //   });
      //   await addressDataRepository.save(adressData);
      return data.name;
    });

    return this.crudeDataRepository.getCrudeData();
  }
}
export default StoreDataService;
