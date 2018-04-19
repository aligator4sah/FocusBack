import {Entity,PrimaryGeneratedColumn,Column,ManyToOne} from "typeorm";
import {StateEntity} from "../State/state.entity";

@Entity()
export class CountyEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    county:string;

    @ManyToOne(type => StateEntity,state => state.county)
    state:StateEntity;
}