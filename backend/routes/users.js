import express from 'express';

import { signIn, signUp } from '../controllers/user.js';

// responsible for paths that end with /user

const router = express.Router();

router.post('/signin', signIn);
router.post('/signup', signUp)

export default router;