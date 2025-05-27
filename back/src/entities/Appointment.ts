import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AppointmentStatus } from "../interfaces/IAppointment";
import User from "./User";


@Entity({
    name: "appointments"
})
class Appointment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    time: string;

    @ManyToOne(() => User, (user) => user.appointments)
    user: User;

    @Column({
        type: "enum",
        enum: AppointmentStatus,
        default: AppointmentStatus.ACTIVE,
    })
    status: AppointmentStatus;
}

export default Appointment;