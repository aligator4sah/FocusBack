import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import { CountyEntity} from "../County/county.entity";
import { CommunityEntity} from "../Community/community.entity";

@Entity()
export class CityEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    city:string;

    @ManyToOne(type => CountyEntity,county => county.city)
    county:CountyEntity;

    @OneToMany(type => CommunityEntity,community => community.city)
    community: CommunityEntity[];
}