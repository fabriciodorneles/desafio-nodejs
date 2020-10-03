import UserAddressData from '../entities/UserAddressData';
import ICreateAddressDTO from '../dtos/ICreateAddressDTO';

export default interface IAddressDataRepository {
  create(data: ICreateAddressDTO): Promise<UserAddressData>;
}
