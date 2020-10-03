import { uuid } from 'uuidv4';
import ICreateContactDTO from '../../dtos/ICreateContactDTO';
import UserContactData from '../../entities/UserContactData';
import IContactDataRepository from '../IContactDataRepository';

class FakeContactDataRepository implements IContactDataRepository {
  private contactDataList: UserContactData[] = [];

  public async create({ email, phone, website }: ICreateContactDTO): Promise<UserContactData> {
    const userContactData = new UserContactData();

    Object.assign(userContactData, { id: uuid(), email, phone, website });

    this.contactDataList.push(userContactData);

    return userContactData;
  }
}

export default FakeContactDataRepository;
