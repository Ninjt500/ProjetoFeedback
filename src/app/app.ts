import express, {
    Express, Request, Response, NextFunction,
  } from 'express';
import { FeedbacksRouter } from './routes/feedbacksRoutes';
import { PessoasRouter } from './routes/pessoasRoutes';
import { SetoresRouter } from './routes/setoresRoutes';
import { config } from 'dotenv';
import initializeDB from '../database';

config({
    path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env',
  });

class App
{
    public express : Express;

    constructor()
    {
        this.express = express();
        this.middlewares();
        this.routes();
        this.database();
    }

    public async database()
    {
      await initializeDB();
    }

    public middlewares() {
        this.express.use(express.json());
        this.express.use((req:Request, res: Response, next:NextFunction) => {
          console.log(req.query, `request em: ${new Date().toISOString()}`);
          next();
        });
      }

    public routes()
    {
        this.express.use("/", PessoasRouter);
        this.express.use("/", SetoresRouter);
        this.express.use("/", FeedbacksRouter);
    }
}

export default new App().express;