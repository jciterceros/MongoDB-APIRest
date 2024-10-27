require('dotenv/config');
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';

class App {
    public PORT = process.env.APP_PORT || 3000;
    public HOST = process.env.APP_LOCAL_HOST || 'localhost';
    public MONGO_PORT = process.env.MONGO_PORT || 27017;
    public MONGO_HOST = process.env.MONGO_HOST || 'mongo';
    public MONGO_INITDB_ROOT_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME || 'admin';
    public MONGO_INITDB_ROOT_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD || 'password';
    public MONGO_INITDB_DATABASE = process.env.MONGO_INITDB_DATABASE || 'test';
    public MONGO_EXPRESS_PORT = process.env.MONGO_EXPRESS_PORT || 8081;

    public express: express.Application;

    public constructor() {
        this.express = express();
        this.middlewares();
        this.database();
        this.routes();
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private database(): void {
        /* 
            Example for base conection mongoose with containner
            const DATABASE_CONECTION = `mongodb://mongo:27017/tsnode`;
         */
        const DATABASE_CONECTION = `mongodb://${this.MONGO_HOST}:${this.MONGO_PORT}/${this.MONGO_INITDB_DATABASE}`;

        mongoose.connect(DATABASE_CONECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log('Database connection successful');
        }).catch(err => {
            console.error('Database connection error: ' + err);
        });
    }

    private routes(): void {
        this.express.use(routes);
    }
}

export default new App().express;