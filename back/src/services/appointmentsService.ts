import { FindManyOptions } from "typeorm";
import { appointmentRepository } from "../config/data-source";
import ICreateAppointmentDTO from "../dtos/ICreateAppointmentDTO";
import Appointment from "../entities/Appointment";
import User from "../entities/User";
import { AppointmentStatus } from "../interfaces/IAppointment";
import { getUserByIdService } from "./usersService";


export const getAppointmentsService = async (userId: number | null = null): Promise<Appointment[]> => {
    const options: FindManyOptions<Appointment> = {}

    if (userId) {
        options.where = {
            user: {
                id: userId
            }
        }
    }

    return await appointmentRepository.find(options);
};

export const getAppointmentByIdService = async (id:number): Promise<Appointment> => {
    const foundAppointment: Appointment | null = await appointmentRepository.findOne({
        where: {id},
    });
    if (!foundAppointment) throw new Error ("Appointment not found");
    return foundAppointment;
}

export const createAppointmentService = async (createAppointmentDTO: ICreateAppointmentDTO): Promise<Appointment> => {
    const user: User = await getUserByIdService(createAppointmentDTO.userId);
    
    const newAppointment: Appointment = await appointmentRepository.create({
        date: createAppointmentDTO.date,
        time: createAppointmentDTO.time,
        user: user,
        status: AppointmentStatus.ACTIVE,
    });

    const results: Appointment = await appointmentRepository.save(newAppointment);
    return results;
};

export const cancelAppointmentService = async (id: number): Promise <number> => {
    const foundAppontment: Appointment = await getAppointmentByIdService (id);

    if(foundAppontment.status == AppointmentStatus.CANCELLED) throw new Error ("Appoinment status is already cancelled");

    foundAppontment.status = AppointmentStatus.CANCELLED;

    const results: Appointment = await appointmentRepository.save(foundAppontment);
    return results.id;
}