import { uuid } from 'uuidv4';
import ICreateAddressDTO from '../../dtos/ICreateAddressDTO';
import UserAddressData from '../../entities/UserAddressData';
import IAddressDataRepository from '../IAddressDataRepository';

class FakeAddressDataRepository implements IAddressDataRepository {
  addressDataList: UserAddressData[] = [];

  public async create({
    street,
    suite,
    zipcode,
    city,
    lat,
    lng,
  }: ICreateAddressDTO): Promise<UserAddressData> {
    const userAddressData = new UserAddressData();

    Object.assign(userAddressData, { id: uuid(), street, suite, zipcode, city, lat, lng });

    this.addressDataList.push(userAddressData);

    return userAddressData;
  }
}

export default FakeAddressDataRepository;
