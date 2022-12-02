import express from 'express';
import cors from 'cors';
import compression from 'compression';
import router from './routes/index';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: '*',
    })
);
app.use(compression());

app.use('/api', router);

export default app;
