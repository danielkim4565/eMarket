import express from 'express';
import 'express-async-errors';

const router = express.Router();

router.post(
    '/api/users/signout', 
    async (req, res) => {
        req.session = null;
        res.send("successfully logged out")
    }
);

export {router as signoutRouter};
