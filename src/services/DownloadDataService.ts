import api from '../client/jsonplaceholer';
import AppError from '../errors/AppError';
import CrudeDataRepository from '../repositories/CrudeDataRepository';

class DownloadDataService {
  private crudeDataRepository: CrudeDataRepository;

  constructor(crudeDataRepository: CrudeDataRepository) {
    this.crudeDataRepository = crudeDataRepository;
  }

  public async execute(): Promise<JSON[]> {
    try {
      const { data } = await api.get('/users');
      this.crudeDataRepository.initializeCrudeData(data);
    } catch (err) {
      throw new AppError(`Error in API downloading.`, 404);
    }

    return this.crudeDataRepository.getCrudeData();
  }
}
export default DownloadDataService;
