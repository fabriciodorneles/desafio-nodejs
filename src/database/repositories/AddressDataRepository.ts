import { getRepository, Repository } from 'typeorm';
import ICreateAddressDTO from '../../dtos/ICreateAddressDTO';
import UserAddressData from '../../entities/UserAddressData';
import IAddressDataRepository from '../../repositories/IAddressDataRepository';

class AddressDataRepository implements IAddressDataRepository {
  private ormRepository: Repository<UserAddressData>;

  constructor() {
    this.ormRepository = getRepository(UserAddressData);
  }

  public async create({
    street,
    suite,
    zipcode,
    city,
    lat,
    lng,
  }: ICreateAddressDTO): Promise<UserAddressData> {
    const userAddress = this.ormRepository.create({ street, suite, zipcode, city, lat, lng });

    await this.ormRepository.save(userAddress);

    return userAddress;
  }
}

export default AddressDataRepository;
