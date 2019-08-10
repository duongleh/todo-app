const router = require('express').Router();
import verify from '../middlewares/verifyToken.middleware';

// Todo-list API
router.get('/todo-list', verify, (req: any, res: any) => {
	res.json({ id: 1, success: true });
});

export default router;