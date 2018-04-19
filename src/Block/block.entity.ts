import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { CommunityEntity} from "../Community/community.entity";

@Entity()
export class BlockEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    block:string;

    @ManyToOne(type => CommunityEntity,community=>community.block)
    community: CommunityEntity;
}