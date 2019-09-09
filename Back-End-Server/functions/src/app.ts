import * as dotenv from "dotenv";
dotenv.config({ path: '../.env' });
import * as express from 'express';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import * as logger from 'morgan';
import userRoute from './routes/userAuth.route';
import api from './routes/api.route';

export default class App {
    public app: any;
    constructor() {
        this.app = express();
        this.config();
    }

    private config() {
        // Middleware
        this.app.use(cors());
        this.app.use(logger('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        // Database
        const uri = String(process.env.MONGO_URI || '');
        mongoose.connect(uri, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true })
            .then(() => {
                console.log('Connected to DB successfully!');
            })
            .catch((err: any) => {
                console.error('App starting error:', err.stack);
                process.exit(1);
            });

        // Routing
        this.app.use('/userAuth', userRoute);
        this.app.use('/api', api);
    }
}