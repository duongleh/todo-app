import { string, validate } from '@hapi/joi';

// Login Validation
export function loginValidation(data: any) {
	const schema = {
		username: string().min(6).required(),
		password: string().min(6).required(),
		recaptcha: string().min(6).required()
	};
	return validate(data, schema);
}

// Signup Validation
export function signupValidation(data: any) {
	const schema = {
		username: string().min(6).required(),
		email: string().min(6).required().email(),
		password: string().min(6).required(),
		confirmPassword: string().min(6).required()
	};
	return validate(data, schema);
}
