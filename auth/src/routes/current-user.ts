import express from "express";
import jwt from 'jsonwebtoken';
import { validateRequest, requireAuth, currentUser} from "@emarketproject/common";

const router = express.Router();

router.get('/api/users/currentuser', 
    (req, res) => {
        res.send({ currentUser: req.currentUser || null});
    } 
)

export { router as currentuserRouter}