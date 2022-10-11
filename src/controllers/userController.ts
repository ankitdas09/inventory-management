import { Request, Response, NextFunction } from "express";
import validateUser from "../utils/validation/userSchema";

import User from "../models/userModel";

export const getAllUsers = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	res.send("All Users");
};

export const createNewUser = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const resp = validateUser(req.body);
	if (resp.error) {
		res.json(resp.error?.details);
		return;
	}
	const newUser = new User(req.body);
	res.json(newUser);
};
