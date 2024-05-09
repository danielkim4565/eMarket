import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import { BadRequestError } from '../errors/bad-request-error';

interface UserPayload {
    id: string,
    email: string
}

declare global {
    namespace Express {
      interface Request {
            currentUser: UserPayload
        }
    }
}

export default (req: Request, res: Response, next: NextFunction) => {
    if (!req.session?.jwt) {
        next()
    }
    try {
        const decoded = jwt.verify(req.session!.jwt, process.env.JWT_SECRET_KEY!) as UserPayload
        console.log('Decoded JWT:', decoded)
        req.currentUser = decoded;
        next()
    } catch (err) {
        console.log(err);
        throw new BadRequestError('Invalid JWT')
    }
}