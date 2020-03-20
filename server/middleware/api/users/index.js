import { Router } from 'express';

import createRoutes from './create';
import editRoutes from './edit';

const router = Router();

router.use('/register', createRoutes);
router.use('/profile', editRoutes);

module.exports = router;
