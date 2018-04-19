import {Entity,PrimaryGeneratedColumn,Column,ManyToOne} from "typeorm";
import { CountyEntity} from "../County/county.entity";

@Entity()
export class CityEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    city:string;

    @ManyToOne(type => CountyEntity,county => county.city)
    county:CountyEntity;
}