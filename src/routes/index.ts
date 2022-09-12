import { Router } from "express";
import authRouter from "./authRouter";
import onlineCredentialsRouter from "./onlineCredentialsRouter";
import wifiCredentialsRouter from "./wifiCredentialsRouter";

const router = Router();
router.use(authRouter);
router.use(onlineCredentialsRouter);
router.use(wifiCredentialsRouter);

export default router;