import { Router } from "express";
import * as onlineCredentialsController from "../controllers/onlineCredentialsController";
import validateSchemaMW from "../middlewares/validateSchemaMW";
import { onlineCredentialSchema } from "../schemas/credentialSchemas";
import tokenValidationMW from "../middlewares/tokenValidationMW";

const credentialsRouter = Router();

credentialsRouter.post('/new-online-credential', tokenValidationMW,validateSchemaMW(onlineCredentialSchema), onlineCredentialsController.createCredential);
credentialsRouter.get('/get-online-credentials', tokenValidationMW, onlineCredentialsController.getUserCredentials);
credentialsRouter.get('/get-online-credential/:id',tokenValidationMW,onlineCredentialsController.getCredential);

export default credentialsRouter;