import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

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
}

export default Credential;