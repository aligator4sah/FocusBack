import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToMany} from 'typeorm';
import { CommunityEntity} from "../Community/community.entity";
import { FamilyEntity} from "../Family/family.entity";

@Entity()
export class BlockEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    block: string;

    @Column()
    startstreet:string;

    @Column()
    endstreet:string;

    @Column()
    zipcode:string;

    @ManyToOne(type => CommunityEntity, community => community.block)
    community: CommunityEntity;

    @OneToMany(type => FamilyEntity, family => family.block)
    family: FamilyEntity[];
}