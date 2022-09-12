import { CardCredentials } from "@prisma/client";

export type ICardCredentialData = Omit<CardCredentials, 'id'>;
export type ICreationCardCredentialData = Omit<CardCredentials, 'id' | 'userId'>;