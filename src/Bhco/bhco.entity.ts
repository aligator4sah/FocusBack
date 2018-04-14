import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BhcoEntity{

    @PrimaryGeneratedColumn()
    id:number;

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

    @Column()
    communityid:number;
}