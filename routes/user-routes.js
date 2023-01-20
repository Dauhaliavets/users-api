import express from 'express';
import { getUsers, getUser, deleteUser, updateUser } from '../controllers/user-controller.js';

const userRouter = express.Router();

userRouter.get('/users', getUsers);
userRouter.get('/users/:id', getUser);
userRouter.delete('/users/:id', deleteUser);
userRouter.patch('/users/:id', updateUser);

export default userRouter;
