import { Request, Response } from "express";
import * as authServices from "../services/authServices";
import { IUserData } from "../types/userTypes";

export async function signUp(req: Request, res: Response) {
    const user: IUserData = req.body;

    await authServices.createNewUser(user);
    res.status(200).send("Usuário cadastrado com sucesso!");
}

