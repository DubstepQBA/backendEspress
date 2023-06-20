import express, { json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

export default app;
