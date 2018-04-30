import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {SessionEntity} from "../Session/session.entity";

@Entity()
export class AnswerEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    questionid:number;

    @Column()
    answer:string;

    @ManyToOne(type => SessionEntity,session=>session.answer)
    session:SessionEntity;
}