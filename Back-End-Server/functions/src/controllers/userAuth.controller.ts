import * as rp from 'request-promise';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import * as dotenv from "dotenv";

import account from '../models/account.model';
import { loginValidation, signupValidation } from '../validations/user.validation';

dotenv.config({ path: '../.env' });

export async function getAll(req: any, res: any) {
	try {
		const acc = await account.find();
		res.json(acc);
	} catch (err) {
		res.json({ success: false, message: err });
	}
}

export async function login(req: any, res: any) {
	// validation
	const { error } = loginValidation(req.body);
	if (error) return res.status(400).json({ success: false, message: error.details[0].message });

	// Check if the user exists
	const userExist = await account.findOne({ username: req.body.username });
	if (!userExist) return res.status(400).json({ success: false, message: 'User is not found' });

	// Check if the password correct
	const isValidPassword = await bcrypt.compare(req.body.password, userExist.password);
	if (!isValidPassword) return res.status(400).json({ success: false, message: 'Password is invalid' });

	// Check if recaptcha token is valid
	const reCaptchaOptions = {
		method: 'POST',
		uri: 'https://www.google.com/recaptcha/api/siteverify',
		qs: {
			secret: process.env.RECAPTCHA_SECRETKEY,
			response: req.body.recaptcha
		},
		json: true
	};

	try {
		const resp = await rp(reCaptchaOptions);
		if (resp.success) {
			// Create and assign token
			const token = jwt.sign({ _id: userExist._id }, process.env.JWT_SECRETKEY as string);
			res.header('auth-token', token).json({
				success: true,
				userId: userExist._id,
				token: token
			});
		} else {
			res.status(400).json({ success: false, message: 'Fail to verify reCaptcha' });
		}
	} catch (err) {
		res.status(400).json({ success: false, message: err });
	}
}

export async function signup(req: any, res: any) {
	// validation
	const { error } = signupValidation(req.body);
	if (error) return res.status(400).json({ success: false, message: error.details[0].message });

	// Check if the user exists
	const userExist = await account.findOne({ username: req.body.username });
	if (userExist) return res.status(400).json({ success: false, message: 'User is already exists' });

	// Hash password
	const salt = await bcrypt.genSalt(10);
	const hassedPassword = await bcrypt.hash(req.body.password, salt);

	// Creat new User
	const acc = new account({
		username: req.body.username,
		email: req.body.email,
		password: hassedPassword
	});
	try {
		const savedPost = await acc.save();
		res.json({
			success: true,
			userId: savedPost._id
		});
	} catch (err) {
		res.status(400).json({ success: false, message: err });
	}
}