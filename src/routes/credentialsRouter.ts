import { Router } from "express";
import * as credentialsController from "../controllers/credentialsController";
import validateSchemaMW from "../middlewares/validateSchemaMW";
import { onlineCredentialSchema } from "../schemas/credentialSchemas";
import tokenValidationMW from "../middlewares/tokenValidationMW";

const credentialsRouter = Router();

credentialsRouter.post('/new-online-credential', tokenValidationMW,validateSchemaMW(onlineCredentialSchema), credentialsController.newOnlineCredential);

export default credentialsRouter;