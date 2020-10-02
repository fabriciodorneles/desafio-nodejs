// src/routes/index.ts
import { Router } from 'express';
import initialRouter from './initial.routes';

const routes = Router();

routes.use('/', initialRouter);

export default routes;
