import { Entity, Column, PrimaryGeneratedColumn,OneToMany} from 'typeorm';
import { CommunityMemberEntity} from "../CommunityMembers/communityMember.entity";

@Entity()
export class BhcoEntity{

    @PrimaryGeneratedColumn()
    id:number;

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
    phone: string;

    @Column()
    email: string;

    @Column()
    state:string;

    @Column()
    county:string;

    @Column()
    city:string;

    @Column()
    community:string;

    @OneToMany(type => CommunityMemberEntity,communityMember=>communityMember.bhco,{
        // cascadeInsert: true,
        // cascadeUpdate: true,
        // // cascadeRemove: true
    })
    communityMember: CommunityMemberEntity[];

}