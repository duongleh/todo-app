const router = require('express').Router();
import verify from '../middlewares/verifyToken.middleware';
import { get, post, update } from '../controllers/todo.controller';

// Todo-list API
router.get('/todo/:id', verify, get);
router.post('/todo', verify, post);
router.put('/todo', verify, update);

export default router;