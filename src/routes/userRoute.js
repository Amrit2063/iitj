import express from 'express';
import verifyToken from '../middleware/verifyToken.js';
import { getCurrentUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/', verifyToken, getCurrentUser);

export default userRouter;