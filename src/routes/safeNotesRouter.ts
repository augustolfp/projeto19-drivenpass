import { Router } from "express";
import * as controller from "../controllers/safeNotesController";
import validateSchemaMW from "../middlewares/validateSchemaMW";
import { safeNoteSchema } from "../schemas/credentialSchemas";
import tokenValidationMW from "../middlewares/tokenValidationMW";

const notesRouter = Router();

notesRouter.post('/new-note', tokenValidationMW, validateSchemaMW(safeNoteSchema), controller.createNote);
notesRouter.get('/get-notes', tokenValidationMW, controller.getUserNotes);
notesRouter.get('/get-note/:id', tokenValidationMW, controller.getNote);
notesRouter.delete('/delete-note/:id', tokenValidationMW, controller.deleteNote);

export default notesRouter;