import { Router } from 'express';

import tokenRoutes from './token';

const router = Router();

router.use('/', tokenRoutes);

module.exports = router;
