// src/routes/index.ts
import { Router } from 'express';
import initialRouter from './initial.routes';
import saveDataRouter from './saveData.routes';
import downloadDataRouter from './downloadData.routes';

const routes = Router();

routes.use('/', initialRouter);
routes.use('/save', saveDataRouter);
routes.use('/download', downloadDataRouter);

export default routes;
