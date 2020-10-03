import { getRepository, Repository } from 'typeorm';
import ICreatePersonalDataDTO from '../../dtos/ICreatePersonalDataDTO';
import UserPersonalData from '../../entities/UserPersonalData';
import IPersonalDataRepository from '../../repositories/IPersonalDataRepository';

class PersonalDataRepository implements IPersonalDataRepository {
  private ormRepository: Repository<UserPersonalData>;

  constructor() {
    this.ormRepository = getRepository(UserPersonalData);
  }

  public async create({
    name,
    username,
    address_id,
    contact_id,
  }: ICreatePersonalDataDTO): Promise<UserPersonalData> {
    const userPersonalData = this.ormRepository.create({ name, username, address_id, contact_id });

    await this.ormRepository.save(userPersonalData);

    return userPersonalData;
  }
}

export default PersonalDataRepository;
