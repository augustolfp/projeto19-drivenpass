import * as userRepository from "../repositories/userRepository";
import { IUserData } from "../types/userTypes";
import bcrypt from "bcrypt";

export async function createNewUser(userData: IUserData) {

    const emailCheck = await userRepository.getUserByEmail(userData.email);
    
    if(emailCheck?.email) {
        throw {type: "error_email_already_used", message: "Email já cadastrado na plataforma!"};
    } 

    const passwordHash = bcrypt.hashSync(userData.password, 10);

    await userRepository.insertNewUser({
        name: userData.name,
        email: userData.email,
        password: passwordHash
    });
    
    return "Usuário criado com sucesso!";
}