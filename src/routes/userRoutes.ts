import { Request, Response, NextFunction, Router } from "express";
import validateUser from "../utils/validation/userSchema";
import User from "../models/userModel";
import { createNewUser, getAllUsers } from "../controllers/userController";
const router: Router = Router();

router.get("/", getAllUsers);

router.post("/", createNewUser);

export default router;
