import { Router } from "express";
import authRouter from "./authRouter";
import onlineCredentialsRouter from "./onlineCredentialsRouter";

const router = Router();
router.use(authRouter);
router.use(onlineCredentialsRouter);

export default router;