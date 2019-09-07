import { Request, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { BAD_REQUEST, UNAUTHORIZED } from 'http-status-codes';
import * as dotenv from "dotenv";
dotenv.config({ path: '../../.env' });

export default function (req: Request, res: any, next: NextFunction) {
	const token = req.header('auth-token');
	if (!token) return res.status(UNAUTHORIZED).json({ success: false, message: 'Access Denied' });
	try {
		const verified = verify(token, process.env.JWT_SECRETKEY as string);
		req.body.user = verified;
		next();
	} catch (err) {
		res.status(BAD_REQUEST).json({ success: false, message: 'Invalid Token' });
	}
}