import { uuid } from 'uuidv4';
import IPersonalDataRepository from '../IPersonalDataRepository';
import ICreatePersonalDataDTO from '../../dtos/ICreatePersonalDataDTO';
import UserPersonalData from '../../entities/UserPersonalData';

class FakePersonalDataRepository implements IPersonalDataRepository {
  private pesonalDataList: UserPersonalData[] = [];

  public async create({
    name,
    username,
    address_id,
    contact_id,
  }: ICreatePersonalDataDTO): Promise<UserPersonalData> {
    const userPersonalData = new UserPersonalData();

    Object.assign(userPersonalData, { id: uuid(), name, username, address_id, contact_id });

    this.pesonalDataList.push(userPersonalData);

    return userPersonalData;
  }
}

export default FakePersonalDataRepository;
