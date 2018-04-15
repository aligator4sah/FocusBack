import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SystemAdminEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    firstname: string;

    @Column()
    midname: string;

    @Column()
    lastname: string;

    @Column()
    phone: string;

    @Column()
    email: string;
}