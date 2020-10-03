import ICreatePersonalDataDTO from '../dtos/ICreatePersonalDataDTO';
import UserPersonalData from '../entities/UserPersonalData';

export default interface IPersonalDataRepository {
  create(data: ICreatePersonalDataDTO): Promise<UserPersonalData>;
}
