import "regenerator-runtime/runtime.js";
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
import errorhandler from 'errorhandler';

import passport from 'passport';
import './config/passport.js';

import errorHandler from './controllers/error';
import dotenv from 'dotenv';

import routes from './routes';
import './lib/user.js';

const app = express();

dotenv.config();

app.use(cors());
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat' }));
app.use(express.static(path.join(__dirname, '../public')));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', routes);

app.use(errorHandler);

module.exports = app;
