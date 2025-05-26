import { Request, Response } from "express";
import IUser from "../interfaces/IUser";
import { createUserService, getUserByIdService, getUsersService } from "../services/usersService";
import ICreateUserDTO from "../dtos/ICreateUserDTO";
import { validateCredentialService } from "../services/credentialsService";

// GET /users => Obtener el listado de todos los usuarios.
export const getUsersController = async (_req: Request, res:Response) => {
    try {
        const users: IUser[] = await getUsersService();
        res.status(200).json({
            succes: true,
            data: users,
        });
    } catch (error:any) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// GET /users/:id => Obtener el detalle de un usuario específico.
export const getUserByIdController = async (req: Request, res:Response) => {
    try {
        const {id} = req.params;
        const user: IUser = await getUserByIdService(Number(id));    
        res.status(200).json({
            succes: true,
            data: user,
        });
    } catch (error:any) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// POST /users/register => Registro de un nuevo usuario.
export const registerController = async (req: Request, res:Response) => {
    try {
        const {name, email, birthdate, nDni, username, password}: ICreateUserDTO = req.body;
        const user: IUser = await createUserService({name, email, birthdate, nDni, username, password});    
        res.status(201).json({
            succes: true,
            data: user,
        });
    } catch (error:any) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// POST /users/login => Login del usuario a la aplicación.
export const loginController = async (req: Request, res:Response) => {
    try {
        const {username, password}: ICreateUserDTO = req.body;
        const credentialId: number = await validateCredentialService(username, password);    
        res.status(200).json({
            succes: true,
            data: credentialId,
        });
    } catch (error:any) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};