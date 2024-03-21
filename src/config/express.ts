import express, { Request, Response } from 'express';
import helmet from 'helmet';

import { errorHandler } from '../middleware';
import { routes } from '../router';

export const app = () => {
  const app = express();
  app.use((_: Request, res: Response, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Credentials, Set-Cookie',
    );
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, Accept, Access-Control-Allow-Credentials, Cross-Origin',
    );
    res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS',
    );
    next();
  });
  app.use(express.json());
  app.use(helmet());
  // Routes
  app.use('/api', routes);
  app.use(errorHandler);
  app.get('/health', (_, res) => res.status(200).send({ success: true }));
  // All non-specified routes return 404
  app.get('*', (_, res) => res.status(404).send('Not Found'));
  return app;
};
