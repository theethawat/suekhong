import express from 'express';
import userRouter from './user';
import productRouter from './product';

console.log('Load API Route');
const router = express.Router();
router.use('/user', userRouter);
router.use('/product', productRouter);

export default router;
