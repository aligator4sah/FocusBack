import {Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import {AnswerEntity} from "../Answer/answer.entity";

@Entity()
export class SessionEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    userid:number;

    @CreateDateColumn()
    createdate:any;

    @UpdateDateColumn()
    updatedate:any;

    @OneToMany(type => AnswerEntity,answer=>answer.session)
    answer:AnswerEntity[];
}