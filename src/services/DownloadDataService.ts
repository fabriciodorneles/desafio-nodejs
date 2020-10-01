import api from '../client/jsonplaceholer';
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
      throw Error(`Error in API downloading.`);
    }

    return this.crudeDataRepository.getCrudeData();
  }
}
export default DownloadDataService;
