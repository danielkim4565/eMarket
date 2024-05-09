import express from 'express';
import 'express-async-errors';
import { Result, ValidationError, body, check, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/validation-error';
import { PostgresDataSource, Users } from '../db/db';
import { User } from '../services/user';
import { PasswordManager } from '../services/passwordManager';
import { BadRequestError } from '../errors/bad-request-error';
import jwt from 'jsonwebtoken'
import { validateRequest } from '../middleware/validate-request'

const router = express.Router();

router.post(
    '/api/users/signin', 
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .notEmpty()
        .withMessage('Please enter a password'), 
    validateRequest,
    async (req, res) => {
        const users = await User.getUsers(req.body.email)

        if (users.length >= 1 && PasswordManager.compare(req.body.password, users[0].password)) {
            const payload = {
                id: users[0].id,
                email: req.body.email
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET_KEY!, { expiresIn: '1h' });
            req.session = { 
                jwt: token 
            };
            res.send('Loggedin');
        } else {
            throw new BadRequestError('Incorrect Email or Password')
        }
    }
);

export {router as signinRouter};
