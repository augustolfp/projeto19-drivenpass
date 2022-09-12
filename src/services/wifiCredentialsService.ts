import * as credentialsRepo from "../repositories/wifiCredentialsRepository";
import { ICreationWifiCredentialData, IWifiCredentialData } from "../types/wifiCredentialsTypes";

import Cryptr from "cryptr";
const cryptr = new Cryptr(process.env.CRYPTR_KEY!);

export async function create(credentialData: ICreationWifiCredentialData, userId: number) {
    const encryptedPassword: string = cryptr.encrypt(credentialData.password);

    const newCredential: IWifiCredentialData = {
        ...credentialData,
        password: encryptedPassword,
        userId
    }

    await credentialsRepo.create(newCredential);

    return "Credencial salva com sucesso!";
}

export async function getUserCredentials(userId: number) {
    const credentials = await credentialsRepo.getByUser(userId);

    const decryptedCredentials = credentials.map(credential => {
        return {...credential, password: cryptr.decrypt(credential.password)}
    });

    return decryptedCredentials;
}

export async function getCredential(credentialId: number, userId: number) {
    const credential = await credentialsRepo.getById(credentialId);

    if(credential?.userId !== userId) {
        throw {type: "Error_credential_is_not_from_user", message: "Credencial não pertence ao usuário!"};
    }

    return {...credential, password: cryptr.decrypt(credential.password)};
}

export async function deleteCredential(credentialId: number, userId: number) {
    const credential = await credentialsRepo.getById(credentialId);

    if(credential?.userId !== userId) {
        throw {type: "Error_credential_is_not_from_user", message: "Credencial não pertence ao usuário!"};
    }

    await credentialsRepo.deleteCredential(credentialId);
    return "Credencial apagada com sucesso!";
}