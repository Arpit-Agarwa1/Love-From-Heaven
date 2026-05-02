import express from 'express';
import cors from 'cors';
import { apiRouter } from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';

/**
 * Builds the Express app: adds shared helpers (CORS, JSON), routes, then error handling.
 * @returns {import('express').Express}
 */
export function createApp() {
  const app = express();

  app.use(cors({ origin: ['http://localhost:5173'], credentials: false }));
  app.use(express.json());

  app.get('/health', (_req, res) => {
    res.json({ ok: true, service: 'love-from-heaven-api' });
  });

  app.use('/api', apiRouter);

  app.use(errorHandler);

  return app;
}
