const router = require('express').Router();

import { getAll, login, signup } from '../controllers/userAuth.controller';

router.get('/', getAll);

router.post('/login', login);

router.post('/signup', signup);

export default router;