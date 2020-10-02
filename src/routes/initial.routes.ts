import { Router, Response } from 'express';
import CrudeDataRepository from '../repositories/CrudeDataRepository';
import DownloadDataService from '../services/DownloadDataService';
import StoreDataService from '../services/StoreDataService';

const initialRouter = Router();
const crudeDataRepository = new CrudeDataRepository();

initialRouter.get('/download', async (request, response: Response) => {
  try {
    const downloadDataService = new DownloadDataService(crudeDataRepository);
    const crudeData = await downloadDataService.execute();
    return response.json(crudeData);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});
initialRouter.get('/store', async (request, response: Response) => {
  const storeDataService = new StoreDataService(crudeDataRepository);
  const storedData = await storeDataService.execute();
  return response.json(storedData);
});
initialRouter.get('/', async (request, response: Response) => {
  return response.json('Welcome! -- /download -- for download Data from API');
});

export default initialRouter;
