import { Router } from "express";
import * as controller from "../controllers/onlineCredentialsController";
import validateSchemaMW from "../middlewares/validateSchemaMW";
import { onlineCredentialSchema } from "../schemas/credentialSchemas";
import tokenValidationMW from "../middlewares/tokenValidationMW";

const credentialsRouter = Router();

credentialsRouter.post('/new-online-credential', tokenValidationMW,validateSchemaMW(onlineCredentialSchema), controller.createCredential);
credentialsRouter.get('/get-online-credentials', tokenValidationMW, controller.getUserCredentials);
credentialsRouter.get('/get-online-credential/:id',tokenValidationMW,controller.getCredential);
credentialsRouter.delete('/delete-online-credential/:id', tokenValidationMW, controller.deleteCredential);

export default credentialsRouter;