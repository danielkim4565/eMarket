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
    '', 
    body('email')
        .isEmail()
        .withMessage('Invalid Email'),
    body('password')
        .trim()
        .isLength({ min: 5 })
        .withMessage('Invalid Password'), 
    validateRequest,
    async (req, res) => {

        const users = await User.getUsers(req.body.email)
        if (users.length == 0) {
            await User.addUser(req.body.email, PasswordManager.encrypt(req.body.password));
        } else {
            throw new BadRequestError('Email in use')
        }
        const currentUsers = await User.getUsers(req.body.email)
        const payload = {
            id: currentUsers[0].id,
            email: req.body.email
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY!, { expiresIn: '1h' });
        req.session!.jwt = token;
        res.send('User Created!');
    }
);

export {router as signupRouter};
