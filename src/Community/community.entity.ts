import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {CityEntity} from "../City/city.entity";

@Entity()
export class CommunityEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    community:string;

    @ManyToOne(type => CityEntity, city=> city.community)
    city:CityEntity;
}