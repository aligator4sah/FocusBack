import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserDemographicEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    userid:number;

    @Column()
    questionid:number;

    @Column()
    answer:string;
}