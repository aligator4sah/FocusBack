import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {DomainEntity} from "../DomainForQuestionnaire/Domain/domain.entity";
import {SubDomainEntity} from "../DomainForQuestionnaire/SubDomain/subDomain.entity";

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

    @ManyToOne(type => DomainEntity,domain=>domain.questionnaire)
    domain:DomainEntity;

    @ManyToOne(type => SubDomainEntity,subdomain=>subdomain.questionnaire)
    subdomain:SubDomainEntity;

    @Column()
    questiontype:string;

    @Column('double precision')
    weight: number;
}