import { Router } from "express";
import * as authController from "../controllers/authController";
import validateSchemaMW from "../middlewares/validateSchemaMW";
import {signUpSchema, signInSchema} from "../schemas/authSchemas";
import tokenValidationMW from "../middlewares/tokenValidationMW";


const authRouter = Router();

authRouter.post('/sign-up', validateSchemaMW(signUpSchema), authController.signUp);
authRouter.post('/sign-in', validateSchemaMW(signInSchema), authController.signIn);

export default authRouter;