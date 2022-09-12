import { Request, Response } from "express";
import * as notesService from "../services/safeNotesService";
import { ICreationSafeNotesData } from "../types/safeNotesTypes";

export async function createNote(req: Request, res: Response) {
    const noteData: ICreationSafeNotesData = req.body;
    const userId: number = Number(res.locals.userData.userId);

    await notesService.create(noteData, userId);
    return res.status(201).send("Nota criada com sucesso!");
}

export async function getUserNotes(req: Request, res: Response) {
    const userId: number = Number(res.locals.userData.userId);

    const notes = await notesService.getUserNotes(userId);
    return res.status(200).send(notes);
}

export async function getNote(req: Request, res: Response) {
    const noteId: number = Number(req.params.id);
    const userId = Number(res.locals.userData.userId);

    const note = await notesService.getNote(noteId, userId);
    return res.status(200).send(note);
}

export async function deleteNote(req: Request, res: Response) {
    const noteId: number = Number(req.params.id);
    const userId = Number(res.locals.userData.userId);

    const removeNote = await notesService.deleteNote(noteId, userId);
    return res.status(200).send(removeNote);
}