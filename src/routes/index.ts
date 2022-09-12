import { Router } from "express";
import authRouter from "./authRouter";
import onlineCredentialsRouter from "./onlineCredentialsRouter";
import wifiCredentialsRouter from "./wifiCredentialsRouter";
import cardCredentialsRouter from "./cardCredentialsRouter";
import safeNotesRouter from "./safeNotesRouter";

const router = Router();
router.use(authRouter);
router.use(onlineCredentialsRouter);
router.use(wifiCredentialsRouter);
router.use(cardCredentialsRouter);
router.use(safeNotesRouter);

export default router;