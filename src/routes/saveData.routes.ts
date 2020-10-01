import { Router, Response } from 'express';

const saveDataRouter = Router();

saveDataRouter.get('/', (request, response: Response) => response.json({ message: 'Save Data' }));

export default saveDataRouter;
