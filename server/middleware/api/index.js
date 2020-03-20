import { Router } from 'express';
import authRoutes from './auth';
import userRoutes from './users';

const router = Router();

/* GET users listing. */
router.use('/auth', authRoutes);
router.use('/users', userRoutes);

module.exports = router;
