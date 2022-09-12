import { Router } from "express";
import * as controller from "../controllers/wifiCredentialsController";
import validateSchemaMW from "../middlewares/validateSchemaMW";
import { wifiCredentialSchema } from "../schemas/credentialSchemas";
import tokenValidationMW from "../middlewares/tokenValidationMW";

const credentialsRouter = Router();

credentialsRouter.post('/new-wifi-credential', tokenValidationMW, validateSchemaMW(wifiCredentialSchema), controller.createCredential);
credentialsRouter.get('/get-wifi-credentials', tokenValidationMW, controller.getUserCredentials);
credentialsRouter.get('/get-wifi-credential/:id', tokenValidationMW, controller.getCredential);
credentialsRouter.delete('/delete-wifi-credential/:id', tokenValidationMW, controller.deleteCredential);

export default credentialsRouter;