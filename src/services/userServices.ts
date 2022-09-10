import * as userRepository from "../repositories/userRepository";
import { IUserData, ILoginUserData } from "../types/userTypes";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

export async function loginUser(loginUserData: ILoginUserData) {
    const getUser = await userRepository.getUserByEmail(loginUserData.email);

    if(!getUser?.email) {
        throw {type: "error_user_not_found", message: "Usuário não encontrado!"};
    }

    if(!bcrypt.compareSync(loginUserData.password,getUser.password)) {
        throw {type: "error_wrong_password", message: "Senha incorreta!"};
    }

    const token = jwt.sign({
        email: getUser.email,
        name: getUser.name,
        userId: getUser.id
    }, process.env.JWT_SECRET!, {
        expiresIn: '1h'
    });

    return token;
}