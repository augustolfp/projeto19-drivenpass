import { Router } from "express";
import authRouter from "./authRouter";
import onlineCredentialsRouter from "./onlineCredentialsRouter";
import wifiCredentialsRouter from "./wifiCredentialsRouter";
import cardCredentialsRouter from "./cardCredentialsRouter";

const router = Router();
router.use(authRouter);
router.use(onlineCredentialsRouter);
router.use(wifiCredentialsRouter);
router.use(cardCredentialsRouter);

export default router;