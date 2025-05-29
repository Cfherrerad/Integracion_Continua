import { error } from "console";
import { credentialRepository, userRepository } from "../config/data-source";
import ICreateUserDTO from "../dtos/ICreateUserDTO";
import User from "../entities/User";
import { createCredentialService } from "./credentialsService";


export const getUsersService = async (): Promise<User[]> => {
    return await userRepository.find();
};

export const getUserByIdService = async (id:number): Promise<User> => {
    const foundUser: User | null = await userRepository.findOne({
        where: { id },
        relations: {
            appointments: true,
        }
    });
    if (!foundUser) throw new Error (" User not found");
    return foundUser;
}

export const createUserService = async (createUserDTO: ICreateUserDTO): Promise<User> => {
     const newUser: User = await userRepository.create({
        name: createUserDTO.name,
        email: createUserDTO.email,
        birthdate: createUserDTO.birthdate,
        nDni: createUserDTO.nDni,
    });

    const user: User = await userRepository.save(newUser)
    
    const newCredential = await createCredentialService(
        createUserDTO.username,
        createUserDTO.password,
        user
    );

    newUser.credentials = newCredential;
    const results: User = await userRepository.save(newUser)
    return results;
};

export const userLoginService = async (username: string, password: string) => {
    const credential = await credentialRepository.findOne({
        where: {username},
        relations: ["user"],
    });

    if( !credential || credential.password !== password) {
        throw error ("Credenciales invalidas");
    }
    return credential.user;
}