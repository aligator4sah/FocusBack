import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StateEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;
}