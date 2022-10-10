import { Request, Response, NextFunction, Router } from "express";
import validateUser from "../utils/validation/userSchema";
import User from "../models/userModel";
const router: Router = Router();
router.get("/", (req: Request, res: Response, next: NextFunction) => {
	res.send("Products");
});

router.post("/", (req: Request, res: Response, next: NextFunction) => {
	const resp = validateUser(req.body);
	if (resp.error) {
		res.json(resp.error?.details);
		return;
	}
	const newUser = new User(req.body);
	res.json(newUser);
});

export default router;
