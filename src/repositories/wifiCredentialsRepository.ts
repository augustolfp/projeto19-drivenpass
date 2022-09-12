import { prisma } from "../config/database";
import { IWifiCredentialData } from "../types/wifiCredentialsTypes";

export async function create(credential: IWifiCredentialData) {
    return await prisma.wifiCredentials.create({data: credential});
}

export async function getById(credentialId: number) {
    return await prisma.wifiCredentials.findUnique({
        where: {
            id: credentialId
        }
    });
}

export async function getByUser(userId: number) {
    return await prisma.wifiCredentials.findMany({
        where: {
            userId: userId
        }
    });
}

export async function deleteCredential(credentialId: number) {
    return await prisma.wifiCredentials.delete({
        where: {
            id: credentialId
        }
    });
}