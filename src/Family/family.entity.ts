import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { BlockEntity} from "../Block/block.entity";

@Entity()
export class FamilyEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    family:string;

    @ManyToOne(type => BlockEntity,block=>block.family)
    block:BlockEntity;

    @Column()
    street:string;

    @Column()
    apartment:string;
}