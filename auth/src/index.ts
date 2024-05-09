// import express from 'express';
// import 'express-async-errors';
// import { signupRouter } from './routes/signup';
// import { currentUserRouter } from './routes/current-user';
// import { errorHandler, NotFoundError } from '@emarketproject/common';
// import { PostgresDataSource } from './db/db'
// import cookieSession from 'cookie-session'
// import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
// import { signinRouter } from './routes/signin';
// import { signoutRouter } from './routes/signout'

dotenv.config();

// const app = express();
// app.set('trust proxy', true)
// app.use(cookieSession({
//     signed: false,
//     secure: true,
//     name: 'auth',
//     maxAge: 24 * 60 * 60 * 1000 
//   }));
// app.use(express.json());

// app.use('/api/users/signup', signupRouter);
// app.use('/api/users/signin', signinRouter);
// app.use('/api/users/signout', signoutRouter);
// app.use('/api/users/currentUser', currentUserRouter);
// app.all('*', async (req, res) => {
//     throw new NotFoundError();
// })

// app.use(errorHandler);

// app.listen(3000, () => {
//     console.log("listening on port 3000")
// });

import { app } from './app';

const start = async () => {
  if (!process.env.JWT_SECRET_KEY) {
    throw new Error('JWT_SECRET_KEY must be defined');
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
};

start();
