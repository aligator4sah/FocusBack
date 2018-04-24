import { Entity, Column, PrimaryGeneratedColumn,ManyToOne,OneToMany } from 'typeorm';
import {DomainEntity} from "../Domain/domain.entity";
import {QuestionnaireEntity} from "../../Questionnaire/questionnaire.entity";

@Entity()
export class SubDomainEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    subdomain:string;

    @Column()
        //default value false
    isolate:boolean;

    @ManyToOne(type => DomainEntity,domain=>domain.subdomain)
    domain:DomainEntity;

    @OneToMany(type => QuestionnaireEntity,questionnaire=>questionnaire.subdomain)
    questionnaire:QuestionnaireEntity[];
}