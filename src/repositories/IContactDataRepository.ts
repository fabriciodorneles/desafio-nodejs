import UserContactData from '../entities/UserContactData';
import ICreateContactDTO from '../dtos/ICreateContactDTO';

export default interface IContactDataRepository {
  create(data: ICreateContactDTO): Promise<UserContactData>;
}
