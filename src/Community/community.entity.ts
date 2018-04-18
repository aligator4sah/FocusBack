import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CommunityEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;
}