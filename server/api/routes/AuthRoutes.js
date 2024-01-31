import { Router } from "express";
import AuthController from "../controller/AuthController.js";

const authRouter = Router();

authRouter.post("/check-user", AuthController.checkUser);

export default authRouter;
