import { Request, Response } from "express";
import * as userServices from "../services/userServices";
import { IUserData, ILoginUserData } from "../types/userTypes";

export async function signUp(req: Request, res: Response) {
    const user: IUserData = req.body;

    await userServices.createNewUser(user);
    return res.status(201).send("Usuário cadastrado com sucesso!");
}

export async function signIn(req: Request, res: Response) {
    const user: ILoginUserData = req.body;

    const getToken = await userServices.loginUser(user);
    return res.status(201).send(getToken);
}

