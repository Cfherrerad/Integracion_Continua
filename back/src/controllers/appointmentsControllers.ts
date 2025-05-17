import { Request, Response } from "express";

//GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
export const getAppointmentsController = (_req: Request, res:Response) => {
    res.status(200).send("Obtener el listado de todos los turnos de todos los usuarios.");
};

// GET /appointments => Obtener el detalle de un turno específico.
export const getAppointmentsByIdController = (_req: Request, res:Response) => {
    res.status(200).send("Obtener el detalle de un turno específico.");
};

// POST /appointments/schedule => Agendar un nuevo turno.
export const createAppointmentsController = (_req: Request, res:Response) => {
    res.status(201).send("Agendar un nuevo turno.");
};

// PUT /appointments/cancel => Cambiar el estatus de un turno a “cancelled”.
export const cancelAppointmentsController = (_req: Request, res:Response) => {
    res.status(200).send("Cambiar el estatus de un turno a “cancelled”.");
};