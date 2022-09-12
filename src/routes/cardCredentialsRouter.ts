import { Router } from "express";
import * as controller from "../controllers/cardCredentialsController";
import validateSchemaMW from "../middlewares/validateSchemaMW";
import { cardCredentialSchema } from "../schemas/credentialSchemas";
import tokenValidationMW from "../middlewares/tokenValidationMW";

const credentialsRouter = Router();

credentialsRouter.post('/new-card-credential', tokenValidationMW,validateSchemaMW(cardCredentialSchema), controller.createCredential);
credentialsRouter.get('/get-card-credentials', tokenValidationMW, controller.getUserCredentials);
credentialsRouter.get('/get-card-credential/:id',tokenValidationMW,controller.getCredential);
credentialsRouter.delete('/delete-card-credential/:id', tokenValidationMW, controller.deleteCredential);

export default credentialsRouter;