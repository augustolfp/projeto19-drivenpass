import * as credentialsRepo from "../repositories/onlineCredentialsRepository";
import { ICreationOnlineCredentialData, IOnlineCredentialData } from "../types/onlineCredentialsTypes";
import Cryptr from "cryptr";
const cryptr = new Cryptr(process.env.CRYPTR_KEY!);

export async function create(credentialData: ICreationOnlineCredentialData, userId: number) {

    const titleCheck = await credentialsRepo.getByTitle(credentialData.title, userId);

    if(titleCheck?.title) {
        throw {type: "error_duplicated_title", message: "Usuário já tem credencial com mesmo título"};
    }

    const encryptedPassword: string = cryptr.encrypt(credentialData.password);

    const newCredential: IOnlineCredentialData = {
        title: credentialData.title,
        URL: credentialData.URL,
        username: credentialData.username,
        password: encryptedPassword,
        userId: userId
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