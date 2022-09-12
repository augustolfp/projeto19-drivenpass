import { Request, Response } from "express";
import * as credentialsService from "../services/wifiCredentialsService";
import { ICreationWifiCredentialData } from "../types/wifiCredentialsTypes";

export async function createCredential(req: Request, res: Response) {
    const credentialData: ICreationWifiCredentialData = req.body;
    const userId: number = Number(res.locals.userData.userId);

    await credentialsService.create(credentialData, userId);
    return res.status(201).send("Credencial cadastrada com sucesso!");
}

export async function getUserCredentials(req: Request, res: Response) {
    const userId: number = Number(res.locals.userData.userId);

    const credentials = await credentialsService.getUserCredentials(userId);
    return res.status(200).send(credentials);
}

export async function getCredential(req: Request, res: Response) {
    const credentialId: number = Number(req.params.id);
    const userId = Number(res.locals.userData.userId);

    const credential = await credentialsService.getCredential(credentialId, userId);
    return res.status(200).send(credential);
}

export async function deleteCredential(req: Request, res: Response) {
    const credentialId: number = Number(req.params.id);
    const userId = Number(res.locals.userData.userId);

    const removeCredential = await credentialsService.deleteCredential(credentialId, userId);
    return res.status(200).send(removeCredential);
}