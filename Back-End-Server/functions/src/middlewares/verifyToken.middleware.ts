import { verify } from 'jsonwebtoken';
import * as dotenv from "dotenv";
dotenv.config({ path: '../../.env' });

export default function (req: any, res: any, next: any) {
	const token = req.header('auth-token');
	if (!token) return res.status(401).json({ success: false, message: 'Access Denied' });
	try {
		const verified = verify(token, process.env.JWT_SECRETKEY as string);
		req.body.user = verified;
		next();
	} catch (err) {
		res.status(400).json({ success: false, message: 'Invalid Token' });
	}
}