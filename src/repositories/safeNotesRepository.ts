import { prisma } from "../config/database";
import { ISafeNotesData } from "../types/safeNotesTypes";

export async function create(note: ISafeNotesData) {
    return await prisma.safeNotes.create({data: note});
}

export async function getById(noteId: number) {
    return await prisma.safeNotes.findUnique({
        where: {
            id: noteId
        }
    });
}

export async function getByTitle(title: string, userId: number) {
    return await prisma.safeNotes.findFirst({
        where: {
            title: title,
            userId: userId
        }
    });
}

export async function getByUser(userId: number) {
    return await prisma.safeNotes.findMany({
        where: {
            userId: userId
        }
    });
}

export async function deleteNote(noteId: number) {
    return await prisma.safeNotes.delete({
        where: {
            id: noteId
        }
    });
}