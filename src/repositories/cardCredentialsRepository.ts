import { prisma } from "../config/database";
import { ICardCredentialData } from "../types/cardCredentialsTypes";

export async function create(credential: ICardCredentialData) {
    return await prisma.cardCredentials.create({data: credential});
}

export async function getById(credentialId: number) {
    return await prisma.cardCredentials.findUnique({
        where: {
            id: credentialId
        }
    });
}

export async function getByTitle(title: string, userId: number) {
    return await prisma.cardCredentials.findFirst({
        where: {
            title: title,
            userId: userId
        }
    });
}

export async function getByUser(userId: number) {
    return await prisma.cardCredentials.findMany({
        where: {
            userId: userId
        }
    });
}

export async function deleteCredential(credentialId: number) {
    return await prisma.cardCredentials.delete({
        where: {
            id: credentialId
        }
    });
}