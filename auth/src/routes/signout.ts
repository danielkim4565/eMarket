import express from 'express';
import 'express-async-errors';

const router = express.Router();

router.post(
    '', 
    async (req, res) => {
        req.session = null;
        res.send("successfully logged out")
    }
);

export {router as signoutRouter};
