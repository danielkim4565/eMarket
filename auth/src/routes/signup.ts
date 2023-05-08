import express from 'express';
import 'express-async-errors';
import { Result, ValidationError, body, check, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/validation-error';
import { PostgresDataSource } from '../db/db';

const router = express.Router();

router.post(
    '', 
    body('email')
        .isEmail()
        .withMessage('Invalid Email'),
    body('password')
        .trim()
        .isLength({ min: 5 })
        .withMessage('Invalid Password'), 
    async (req, res) => {
        const result: Result = validationResult(req);
        const errors: ValidationError[] = result.array();

        if (!result.isEmpty()) {
            throw new RequestValidationError(errors)
        }
        try {
            await PostgresDataSource.manager.query(`INSERT INTO Users (email, password) VALUES ('${req.body.email}', '${req.body.password}')`)
        } catch (err: any) {
            console.log(err)
        }

        res.send('User Created!');
    }
);

export {router as signupRouter};