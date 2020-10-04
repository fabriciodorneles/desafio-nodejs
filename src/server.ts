import 'reflect-metadata';

import express from 'express';
import routes from './routes';
import './database';
import MyLogger from './errors/Logger';

const app = express();

app.use(routes);

app.listen(3333, () => {
  MyLogger.writeInfoLog('🏹 Server started on port 3333');
});
