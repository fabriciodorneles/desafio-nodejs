import { Router, Response } from 'express';

const downladDataRouter = Router();

downladDataRouter.get('/', (request, response: Response) =>
  response.json({ message: 'DownloadData' }),
);

export default downladDataRouter;
