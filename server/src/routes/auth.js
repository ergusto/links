import { Router } from 'express';
import passport from 'passport';

import signupController from '../controllers/auth/signup.js';
import tokenController from '../controllers/auth/token.js';

const router = Router();

router.post('/signup', passport.authenticate('signup', { session: false }), signupController);
router.post('/token', tokenController);

export default router;
