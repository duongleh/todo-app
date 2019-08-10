import * as dotenv from "dotenv";
dotenv.config({ path: '../.env' });
import * as express from 'express';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import * as logger from 'morgan';

import userRoute from './routes/userAuth.route';
import todoListRoute from './routes/api.route';


class App {
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
        const uri = `mongodb://${process.env.MONGO_NAME}:${process.env.MONGO_PASSWORD}@cluster0-shard-00-00-df395.gcp.mongodb.net:27017,cluster0-shard-00-01-df395.gcp.mongodb.net:27017,cluster0-shard-00-02-df395.gcp.mongodb.net:27017/User?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`;
        mongoose.connect(uri, { useNewUrlParser: true })
            .then(() => {
                console.log('Connected to DB successfully!');
            })
            .catch((err: any) => {
                console.error('App starting error:', err.stack);
                process.exit(1);
            });

        // Routing
        this.app.use('/userAuth', userRoute);
        this.app.use('/api', todoListRoute);
    }
}

export default new App().app;