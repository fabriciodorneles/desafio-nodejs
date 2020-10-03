import { getRepository, Repository } from 'typeorm';
import ICreateContactDTO from '../../dtos/ICreateContactDTO';
import UserContactData from '../../entities/UserContactData';
import IContactDataRepository from '../../repositories/IContactDataRepository';

class ContactDataRepository implements IContactDataRepository {
  private ormRepository: Repository<UserContactData>;

  constructor() {
    this.ormRepository = getRepository(UserContactData);
  }

  public async create({ email, phone, website }: ICreateContactDTO): Promise<UserContactData> {
    const userContact = this.ormRepository.create({ email, phone, website });

    await this.ormRepository.save(userContact);

    return userContact;
  }
}

export default ContactDataRepository;
