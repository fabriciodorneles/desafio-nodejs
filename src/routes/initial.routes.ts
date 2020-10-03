import { Router, Response } from 'express';
import AddressDataRepository from '../database/repositories/AddressDataRepository';
import ContactDataRepository from '../database/repositories/ContactDataRepository';
import PersonalDataRepository from '../database/repositories/PersonalDataRepository';
import CrudeDataRepository from '../repositories/CrudeDataRepository';
import DownloadDataService from '../services/DownloadDataService';
import StoreDataService from '../services/StoreDataService';

const initialRouter = Router();
const crudeDataRepository = new CrudeDataRepository();

initialRouter.get('/', async (request, response: Response) => {
  return response.json('Welcome! -- /download -- for download Data from API');
});

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
  const personalDataRepository = new PersonalDataRepository();
  const addressDataRepository = new AddressDataRepository();
  const contactDataRepository = new ContactDataRepository();

  const storeDataService = new StoreDataService(
    crudeDataRepository,
    personalDataRepository,
    addressDataRepository,
    contactDataRepository,
  );
  const storedData = await storeDataService.execute();
  return response.json(storedData);
});

export default initialRouter;
