import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Appointment from "./Appointment";
import Credential from "./Credential";

@Entity({
    name: "users"
})
class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        unique: true,
    })
    email: string;

    @Column()
    birthdate: string;

    @Column({
        type: "int",
        unique: true,
    })
    nDni: number;

    @OneToOne(() => Credential)
    @JoinColumn()
    credentials: Credential;

    @OneToMany(() => Appointment, (appointment) => appointment.user)
    appointments: Appointment[];
}

export default User;