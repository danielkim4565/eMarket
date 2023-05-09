import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import { BadRequestError } from '../errors/bad-request-error';
import { Result, ValidationError, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/validation-error';


export const validateRequest =  (req: Request, res: Response, next: NextFunction) => {
    const result: Result = validationResult(req);
    const errors: ValidationError[] = result.array();
    if (!result.isEmpty()) {
        throw new RequestValidationError(errors)
    }
    next();
}