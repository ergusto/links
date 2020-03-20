import "regenerator-runtime/runtime.js";
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
import errorhandler from 'errorhandler';

import errorMiddleware from './middleware/error';
import dotenv from 'dotenv';

import { startDatabase } from './lib';

const app = express();

dotenv.config();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

startDatabase(process.env.MONGO_URL);

import './models';
import './config/passport';
import apiRoutes from './middleware';

app.use('/api', apiRoutes);
app.use(errorMiddleware);

module.exports = app;
