import Joi from "joi";
import { IUser } from "../../models/userModel";

const schema = {
	name: Joi.string().required().min(5).max(40),
	email: Joi.string().email().required(),
	password: Joi.string()
		.regex(/^[a-zA-Z0-9]{3,30}$/)
		.min(6)
		.max(100)
		.required(),
	avatar: Joi.string(),
	isAdmin: Joi.bool(),
};
const userSchema = Joi.object(schema);

const validateUser = (input: IUser) => {
	return userSchema.validate(input);
};

export default validateUser;
