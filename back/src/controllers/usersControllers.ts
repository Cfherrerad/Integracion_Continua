import { Request, Response } from "express";

// GET /users => Obtener el listado de todos los usuarios.
export const getUsersController = (_req: Request, res:Response) => {
    res.status(200).send("Obtener el listado de todos los usuarios.");
};

// GET /users/:id => Obtener el detalle de un usuario específico.
export const getUserByIdController = (_req: Request, res:Response) => {
    res.status(200).send("Obtener el detalle de un usuario específico.");
};

// POST /users/register => Registro de un nuevo usuario.
export const registerController = (_req: Request, res:Response) => {
    res.status(200).send("Registro de un nuevo usuario.");
};

// POST /users/login => Login del usuario a la aplicación.
export const loginController = (_req: Request, res:Response) => {
    res.status(200).send("Login del usuario a la aplicación.");
};