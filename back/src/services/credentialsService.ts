import { credentialRepository } from "../config/data-source";
import Credential from "../entities/Credential";
import User from "../entities/User";

export const createCredentialService = async (username: string, password: string, user: User): Promise <Credential> => {
    const newCredentials = await credentialRepository.create({
        username,
        password,
        user
    });
    
    const results = await credentialRepository.save(newCredentials);

    return results;
};


export const validateCredentialService = async (username: string, password: string): Promise <Credential["id"]> => {
    const foundCredential: Credential | null = await credentialRepository.findOneBy({
        username,
    });

    if (!foundCredential) {
        throw new Error("No existe el username");
    } if(foundCredential.password != password) {
        throw new Error("Contraseña incorrecta");
    }

    return foundCredential.id;
};