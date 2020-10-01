import { Router, Response } from 'express';
import CrudeDataRepository from '../repositories/CrudeDataRepository';
import DownloadDataService from '../services/DownloadDataService';

const initialRouter = Router();
const crudeDataRepository = new CrudeDataRepository();

initialRouter.get('/', async (request, response: Response) => {
  try {
    const downloadDataService = new DownloadDataService(crudeDataRepository);
    const crudeData = await downloadDataService.execute();
    return response.json(crudeData);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default initialRouter;
