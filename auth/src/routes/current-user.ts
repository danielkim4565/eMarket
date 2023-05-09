import express from "express";
import { validateRequest } from "../middleware/validate-request";
import currentUser from "../middleware/current-user";
import { requireAuth } from "../middleware/require-auth";

const router = express.Router();

router.get('', 
    currentUser,
    requireAuth,
    (req, res) => {
        res.send({ currentUser: req.currentUser || null});
    } 
)

export { router as currentuserRouter}