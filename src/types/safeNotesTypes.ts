import { SafeNotes } from "@prisma/client";

export type ISafeNotesData = Omit<SafeNotes, 'id'>;
export type ICreationSafeNotesData = Omit<SafeNotes, 'id' | 'userId'>;