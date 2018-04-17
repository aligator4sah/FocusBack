import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class QuestionnaireEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    label:string;

    @Column('jsonb')
    options:any;

    @Column()
    order:number;

    @Column()
    domain:string;

    @Column()
    subdomain:string;

    @Column()
    questiontype:string;
}