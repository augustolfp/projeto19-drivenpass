import { prisma } from "../config/database";
import { IOnlineCredentialData } from "../types/onlineCredentialsTypes";

export async function create(credential: IOnlineCredentialData) {
    return await prisma.onlineCredentials.create({data: credential});
}

export async function getById(credentialId: number) {
    return await prisma.onlineCredentials.findUnique({
        where: {
            id: credentialId
        }
    });
}

export async function getByTitle(title: string, userId: number) {
    return await prisma.onlineCredentials.findFirst({
        where: {
            title: title,
            userId: userId
        }
    });
}

export async function getByUser(userId: number) {
    return await prisma.onlineCredentials.findMany({
        where: {
            userId: userId
        }
    });
}

export async function deleteCredential(credentialId: number) {
    return await prisma.onlineCredentials.delete({
        where: {
            id: credentialId
        }
    });
}