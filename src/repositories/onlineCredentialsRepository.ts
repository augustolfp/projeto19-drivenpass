import { prisma } from "../config/database";
import { IOnlineCredentialData } from "../types/onlineCredentialsTypes";

export async function insertNewOnlineCredential(onlineCredential: IOnlineCredentialData) {
    return await prisma.onlineCredentials.create({data: onlineCredential});
}

export async function getOnlineCredentialById(id: number) {
    return await prisma.onlineCredentials.findUnique({
        where: {
            id: id
        }
    });
}

export async function getUserOnlineCredentialByTitle(title: string, userId: number) {
    return await prisma.onlineCredentials.findFirst({
        where: {
            title: title,
            userId: userId
        }
    });
}
