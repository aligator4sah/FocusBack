import {Entity,PrimaryGeneratedColumn,Column,ManyToOne,OneToMany} from "typeorm";
import {StateEntity} from "../State/state.entity";
import {CityEntity} from "../City/city.entity";

@Entity()
export class CountyEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    county:string;

    @ManyToOne(type => StateEntity,state => state.county)
    state:StateEntity;

    @OneToMany(type => CityEntity,city => city.county)
    city: CityEntity[];
}