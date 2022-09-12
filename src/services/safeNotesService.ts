import * as safeNotesRepo from "../repositories/safeNotesRepository";
import { ISafeNotesData, ICreationSafeNotesData } from "../types/safeNotesTypes";

export async function create(noteData: ICreationSafeNotesData, userId: number) {

    const titleCheck = await safeNotesRepo.getByTitle(noteData.title, userId);

    if(titleCheck?.title) {
        throw {type: "error_duplicated_title", message: "Usuário já tem nota com mesmo título"};
    }

    const newNote: ISafeNotesData = {
        ...noteData,
        userId
    }
    await safeNotesRepo.create(newNote);

    return "Nota criada com sucesso!";
}

export async function getUserNotes(userId: number) {
    const safeNotes = await safeNotesRepo.getByUser(userId);

    return safeNotes;
}

export async function getNote(noteId: number, userId: number) {
    const safeNote = await safeNotesRepo.getById(noteId);

    if(safeNote?.userId !== userId) {
        throw {type: "Error_note_is_not_from_user", message: "Nota não pertence ao usuário!"};
    }

    return safeNote;
}

export async function deleteNote(noteId: number, userId: number) {
    const safeNote = await safeNotesRepo.getById(noteId);

    if(safeNote?.userId !== userId) {
        throw {type: "Error_note_is_not_from_user", message: "Nota não pertence ao usuário!"};
    }

    await safeNotesRepo.deleteNote(noteId);
    return "Nota apagada com sucesso!";
}