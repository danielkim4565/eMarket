import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { validateRequest, requireAuth, currentUser} from "@emarketproject/common";

const router = express.Router();

router.get('/api/users/currentUser', currentUser, (req: Request, res: Response) => {
        res.send({ currentUser: req.currentUser?.email || null});
    } 
)

export { router as currentUserRouter}
