import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

@Entity({
    name: "credentials",
})
class Credential {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
        unique: true,
    })
    username: string;

    @Column({
        length: 100,
    })
    password: string;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;
}

export default Credential;