import * as onlineCredentialsRepository from "../repositories/onlineCredentialsRepository";
import { ICreationOnlineCredentialData, IOnlineCredentialData } from "../types/onlineCredentialsTypes";
import Cryptr from "cryptr";

export async function createNewOnlineCredential(credentialData: ICreationOnlineCredentialData, userId: number) {

    const titleCheck = await onlineCredentialsRepository.getUserOnlineCredentialByTitle(credentialData.title, userId);

    if(titleCheck?.title) {
        throw {type: "error_duplicated_title", message: "Usuário já tem credencial com mesmo título"};
    }


    const cryptr = new Cryptr(process.env.CRYPTR_KEY!);

    const encryptedCredentialPassword: string = cryptr.encrypt(credentialData.password);

    const newCredential: IOnlineCredentialData = {
        title: credentialData.title,
        URL: credentialData.URL,
        username: credentialData.username,
        password: encryptedCredentialPassword,
        userId: userId
    }

    await onlineCredentialsRepository.insertNewOnlineCredential(newCredential);

    return "Credencial salva com sucesso!";
}