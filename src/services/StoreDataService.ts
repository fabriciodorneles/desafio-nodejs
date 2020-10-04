import UserPersonalData from '../entities/UserPersonalData';
import MyLogger from '../errors/Logger';
import CrudeDataRepository from '../repositories/CrudeDataRepository';
import IAddressDataRepository from '../repositories/IAddressDataRepository';
import IContactDataRepository from '../repositories/IContactDataRepository';
import IPersonalDataRepository from '../repositories/IPersonalDataRepository';

class StoreDataService {
  constructor(
    private crudeDataRepository: CrudeDataRepository,
    private personalDataRepository: IPersonalDataRepository,
    private addressDataRepository: IAddressDataRepository,
    private contactDataRepository: IContactDataRepository,
  ) {}

  public async execute(): Promise<UserPersonalData[]> {
    const crudeData = this.crudeDataRepository.getCrudeData();

    // const userDataList = await Promise.all(
    //   crudeData.map(async data => {
    //     const suiteTst: string = data.address.suite;
    //     const tstKey = 'Suite';
    //     if (suiteTst.indexOf(tstKey) < 0) break;
    //     const userAddress = await this.addressDataRepository.create({
    //       street: data.address.street,
    //       suite: data.address.suite,
    //       city: data.address.city,
    //       zipcode: data.address.zipcode,
    //       lat: data.address.geo.lat,
    //       lng: data.address.geo.lng,
    //     });

    //     const userContact = await this.contactDataRepository.create({
    //       email: data.email,
    //       phone: data.phone,
    //       website: data.website,
    //     });

    //     const personalData = await this.personalDataRepository.create({
    //       name: data.name,
    //       username: data.username,
    //       address_id: userAddress.id,
    //       contact_id: userContact.id,
    //     });
    //     return personalData;
    //   }),
    // );
    const userDataList: UserPersonalData[] = [];
    await Promise.all(
      crudeData.map(async data => {
        const suiteTst: string = data.address.suite;
        const tstKey = 'Suite';
        if (suiteTst.indexOf(tstKey) >= 0) {
          const userAddress = await this.addressDataRepository.create({
            street: data.address.street,
            suite: data.address.suite,
            city: data.address.city,
            zipcode: data.address.zipcode,
            lat: data.address.geo.lat,
            lng: data.address.geo.lng,
          });

          const userContact = await this.contactDataRepository.create({
            email: data.email,
            phone: data.phone,
            website: data.website,
          });

          const personalData = await this.personalDataRepository.create({
            name: data.name,
            username: data.username,
            address_id: userAddress.id,
            contact_id: userContact.id,
          });
          userDataList.push(personalData);
          return personalData;
        }
        MyLogger.writeErrorLog('User not in Suite. Not Recorded.');
        return tstKey;
      }),
    );
    return userDataList;
  }
}
export default StoreDataService;
