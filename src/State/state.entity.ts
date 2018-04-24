import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from 'typeorm';
import {CountyEntity} from "../County/county.entity";

@Entity()
export class StateEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    state:string;

    @OneToMany(type => CountyEntity,county => county.state)
    county:CountyEntity[];
}