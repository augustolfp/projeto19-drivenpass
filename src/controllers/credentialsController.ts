import { Request, Response } from "express";
import * as onlineCredentialsServices from "../services/onlineCredentialsService";
import { ICreationOnlineCredentialData } from "../types/onlineCredentialsTypes";

export async function newOnlineCredential (req: Request, res: Response) {
    const credentialData: ICreationOnlineCredentialData = req.body;
    const userId: number = Number(res.locals.userData.userId); 

    await onlineCredentialsServices.createNewOnlineCredential(credentialData, userId);
    return res.status(201).send("Credencial cadastrada com sucesso!");
}