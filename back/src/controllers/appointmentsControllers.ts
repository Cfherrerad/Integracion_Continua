import { Request, Response } from "express";
import IAppointment from "../interfaces/IAppointment";
import { getAppointmentsService,getAppointmentByIdService, createAppointmentService, cancelAppointmentService } from "../services/appointmentsService";
import ICreateAppointmentDTO from "../dtos/ICreateAppointmentDTO";

//GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
export const getAppointmentsController = async (_req: Request, res:Response) => {
    try {
        const appointments: IAppointment[] = await getAppointmentsService();
        res.status(200).json({
            succes: true,
            data: appointments,
        });
    } catch (error:any) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// GET /appointments => Obtener el detalle de un turno específico.
export const getAppointmentsByIdController = async (req: Request, res:Response) => {
    try {
        const {id} = req.params;
        const appointment: IAppointment = await getAppointmentByIdService(Number(id));    
        res.status(200).json({
            succes: true,
            data: appointment,
        });
    } catch (error:any) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// POST /appointments/schedule => Agendar un nuevo turno.
export const createAppointmentsController = async (req: Request, res:Response) => {
    try {
        const {date, time, userId}: ICreateAppointmentDTO = req.body;
        const appointment: IAppointment = await createAppointmentService({date, time, userId});    
        res.status(201).json({
            succes: true,
            data: appointment,
        });
    } catch (error:any) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// PUT /appointments/cancel => Cambiar el estatus de un turno a “cancelled”.
export const cancelAppointmentsController = async (req: Request, res:Response) => {
        try {
        const {id} = req.params;
        const appointmentId: number = await cancelAppointmentService(Number(id));    
        res.status(201).json({
            succes: true,
            data: appointmentId,
        });
    } catch (error:any) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};