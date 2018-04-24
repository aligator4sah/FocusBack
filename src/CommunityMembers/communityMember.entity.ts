import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,JoinColumn} from 'typeorm';
import { BhcoEntity} from "../Bhco/bhco.entity";
import {CommunityEntity} from "../Community/community.entity";

@Entity()
export class CommunityMemberEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    firstname: string;

    @Column()
    midname: string;

    @Column()
    lastname: string;

    @Column()
    gender: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    date: string;

    @Column()
    addressone: string;

    @Column()
    addresstwo: string;

    @Column()
    family: string;

    @Column()
    block: string;

    @ManyToOne(type => CommunityEntity,community=>community.id)
    community: CommunityEntity;

    @Column()
    city: string;

    @Column()
    county: string;

    @Column()
    state: string;

    @Column()
    race: string;

    @Column()
    marry: string;

    @Column()
    education: string;

    @Column()
    employments: string;

    @Column()
    assigned:boolean;

    @ManyToOne(type => BhcoEntity,bhco=>bhco.communityMember)
    // @JoinColumn({ name: "id" })
    bhco: BhcoEntity;
}