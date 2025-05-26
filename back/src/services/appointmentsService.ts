import ICreateAppointmentDTO from "../dtos/ICreateAppointmentDTO";
import IAppointment, { AppointmentStatus } from "../interfaces/IAppointment";

const AppointmentsDB: IAppointment[] = [];
let appointmentId: number = 1;

export const getAppointmentsService = async (): Promise<IAppointment[]> => {
    return AppointmentsDB;
};

export const getAppointmentByIdService = async (id:number): Promise<IAppointment> => {
    const foundAppointment: IAppointment | undefined = AppointmentsDB.find((user) => user.id == id);
    if (!foundAppointment) throw new Error ("Appointment not found");
    return foundAppointment;
}

export const createAppointmentService = async (createAppointmentDTO: ICreateAppointmentDTO): Promise<IAppointment> => {
    const newAppointment: IAppointment = {
        id: appointmentId++,
        date: createAppointmentDTO.date,
        time: createAppointmentDTO.time,
        userId: createAppointmentDTO.userId,
        status: AppointmentStatus.ACTIVE,
    };

    AppointmentsDB.push(newAppointment);
    return newAppointment;
};

export const cancelAppointmentService = async (id: number): Promise <number> => {
    const foundAppontment: IAppointment = await getAppointmentByIdService (id);

    if(foundAppontment.status == AppointmentStatus.CANCELLED) throw new Error ("Appoinment status is already cancelled");

    foundAppontment.status = AppointmentStatus.CANCELLED;
    return foundAppontment.id;
}