import express from 'express';
import 'express-async-errors';
import { signupRouter } from './routes/signup';
import { currentuserRouter } from './routes/current-user';
import { errorHandler } from './middleware/error-handler';
import { NotFoundError } from './errors/not-found-error';
import { PostgresDataSource } from './db/db'
import cookieSession from 'cookie-session'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

dotenv.config();

const app = express();
// app.set('trust proxy', 1)
app.use(cookieSession({
    name: 'auth',
    keys: ['key1', 'key2'],
    maxAge: 24 * 60 * 60 * 1000 
  }));
app.use(express.json());

app.use('/api/users/signup', signupRouter);
app.use('/api/users/currentuser', currentuserRouter);
app.all('*', async (req, res) => {
    try {
        console.log(await PostgresDataSource.manager.query(`SELECT * FROM Users`));
        console.log(await PostgresDataSource.manager.query(`SELECT * FROM Users WHERE email = 'test@test.com'`));
    } catch (err) {
        console.log(err);
    }
    
    throw new NotFoundError();
})

app.use(errorHandler);

app.listen(3000, () => {
    console.log("listening on port 3000")
});
