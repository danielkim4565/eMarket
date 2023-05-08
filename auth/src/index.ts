import express from 'express';
import 'express-async-errors';
import { signupRouter } from './routes/signup';
import { currentuserRouter } from './routes/current-user';
import { errorHandler } from './middleware/error-handler';
import { NotFoundError } from './errors/not-found-error';
import * as dotenv from "dotenv";
import { PostgresDataSource } from './db/db'

dotenv.config({ path: __dirname+'../.env' });

const app = express();

app.use(express.json());
app.use('/api/users/signup', signupRouter);
app.use('/api/users/currentuser', currentuserRouter);

app.all('*', async (req, res) => {
    try {
        console.log(await PostgresDataSource.manager.query(`SELECT * FROM users WHERE email = 'test'`));
    } catch (err) {
        console.log(err);
    }
    
    throw new NotFoundError();
})

app.use(errorHandler);

app.listen(3000, () => {
    console.log("listening on port 3000")
});
