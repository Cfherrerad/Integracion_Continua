import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @Column({
        type: "enum",
        enum: AppointmentStatus,
        default: AppointmentStatus.ACTIVE,
    })
    status: AppointmentStatus;

    @ManyToOne(() => User, (user) => user.appointments)
    @JoinColumn({ name: 'userId' })
    user: User;
}

export default Appointment;