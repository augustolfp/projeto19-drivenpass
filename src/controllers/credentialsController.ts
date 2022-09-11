import { Request, Response } from "express";
import * as onlineCredentialsServices from "../services/onlineCredentialsService";
import { ICreationOnlineCredentialData } from "../types/onlineCredentialsTypes";

export async function newOnlineCredential (req: Request, res: Response) {
    const credentialData: ICreationOnlineCredentialData = req.body;
    const userId: number = Number(res.locals.userData.userId); 

    await onlineCredentialsServices.createNewOnlineCredential(credentialData, userId);
    return res.status(201).send("Credencial cadastrada com sucesso!");
}

export async function getUserOnlineCredentials(req: Request, res: Response) {
    const userId: number = Number(res.locals.userData.userId);

    const credentials = await onlineCredentialsServices.getUserOnlineCredentials(userId);
    return res.status(200).send(credentials);
}

export async function getUserCredentialById(req: Request, res: Response) {
    const credentialId: number = Number(req.params.id);
    const userId: number = Number(res.locals.userData.userId);

    const credential = await onlineCredentialsServices.getUserCredentialById(credentialId, userId);
    return res.status(200).send(credential);
}