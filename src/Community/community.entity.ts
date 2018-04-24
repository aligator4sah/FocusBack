import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import {CityEntity} from "../City/city.entity";
import {BlockEntity} from "../Block/block.entity";
import {CommunityMemberEntity} from "../CommunityMembers/communityMember.entity";

@Entity()
export class CommunityEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    community:string;

    @ManyToOne(type => CityEntity, city=> city.community)
    city:CityEntity;

    @OneToMany(type=> BlockEntity,block=>block.community)
    block: BlockEntity[];

    @OneToMany(type => CommunityMemberEntity,communityMember => communityMember.community)
    communitymember:CommunityMemberEntity[];
}