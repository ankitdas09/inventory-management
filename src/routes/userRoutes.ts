import { Request, Response, NextFunction, Router } from "express";
import { createNewUser, getAllUsers } from "../controllers/userController";
const router: Router = Router();

router.get("/", getAllUsers);

router.post("/", createNewUser);

export default router;
