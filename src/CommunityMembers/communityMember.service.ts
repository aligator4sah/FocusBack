import { Component ,Inject} from "@nestjs/common";
import { CommunityMemberEntity } from "./communityMember.entity";
import { Repository,getConnection,getRepository } from 'typeorm';
import { ICommunityMemberService, ICommunityMember} from "./Interfaces/index";
import { StateEntity} from "../State/state.entity";

@Component()
export class CommunityMemberService implements ICommunityMemberService{

    constructor(
        @Inject('CommunityMemberRepository') private readonly communityMemberRepository: Repository<CommunityMemberEntity>
    ){}

    public async getAllCommunityMember(): Promise<Array<CommunityMemberEntity>>{
        return await this.communityMemberRepository.find();
    }

    public async getAllComunityMemberByState(stateId:number):Promise<Array<CommunityMemberEntity>>{
        //stupid version but workable
        const selectedState = await getRepository(StateEntity).findOne({id:stateId});
        return await this.communityMemberRepository.find({state:selectedState.state});
        //fancy version

    }

    public async getUnAssignedCommunityMember():Promise<Array<CommunityMemberEntity>>{
        const unAssignedCommunityMember = await getRepository(CommunityMemberEntity)
            .createQueryBuilder("communityMember")
            .where("communityMember.assigned = :assigned",{assigned:false})
            .getMany();

        return unAssignedCommunityMember;
    }

    public async getAssignedCommunityMember():Promise<Array<CommunityMemberEntity>>{
        const AssignedCommunityMember = await getRepository(CommunityMemberEntity)
            .createQueryBuilder("communityMember")
            .innerJoinAndSelect("communityMember.bhco","bhco")
            .where("communityMember.assigned = :assigned",{assigned:true})
            .getMany();

        return AssignedCommunityMember;
    }

    public async getCommunityMember(id:number): Promise<CommunityMemberEntity | null>{
        return await this.communityMemberRepository.findOneById(id);
    }

    public async addCommunityMember(communityMember: ICommunityMember): Promise<CommunityMemberEntity>{
        //below is save action
        return await this.communityMemberRepository.save(communityMember);
    }

    // public async assignCommunityMember(communityMemberID:number,bhcoInfo:any):Promise<Array<CommunityMemberEntity>>{
    //     // for(let community of )
    //     await getConnection().createQueryBuilder().relation(CommunityMemberEntity,"bhco").of(communityMemberID).set(bhcoInfo.bhcoID);
    //     await getConnection().createQueryBuilder().update(CommunityMemberEntity).set({assigned:true}).where("id = :id",{id:communityMemberID}).execute();
    //     return await this.getUnAssignedCommunityMember();
    // }

    public async assignCommunityMember(bhcoID:number,communityMemberIDs:any):Promise<Array<CommunityMemberEntity>>{
        for(let communityMemberID of communityMemberIDs){
            await getConnection().createQueryBuilder().relation(CommunityMemberEntity,"bhco").of(communityMemberID).set(bhcoID);
            await getConnection().createQueryBuilder().update(CommunityMemberEntity).set({assigned:true}).where("id = :id",{id:communityMemberID}).execute();
        }
        return await this.getUnAssignedCommunityMember();
    }

    public async unAssignCommunityMember(communityMemberIDs:any):Promise<Array<CommunityMemberEntity>>{
        for(let communityMemberID of communityMemberIDs){
            await getConnection().createQueryBuilder().relation(CommunityMemberEntity,"bhco").of(communityMemberID).set(null);
            await getConnection().createQueryBuilder().update(CommunityMemberEntity).set({assigned:false}).where("id = :id",{id:communityMemberID}).execute();
        }
        return await this.getAssignedCommunityMember();
    }

    public async updateCommunityMember(id:number,newCommunityMember: ICommunityMember): Promise<CommunityMemberEntity | null>{
        const communityMember = await this.communityMemberRepository.findOneById(id);
        if(!communityMember.id){
            console.log("community member does not exist");
        }
        await this.communityMemberRepository.updateById(id,newCommunityMember);
        return await this.communityMemberRepository.findOneById(id);
    }

    public async deleteCommunityMember(id:number): Promise<string>{
        await this.communityMemberRepository.deleteById(id);
        const communityMember = await this.communityMemberRepository.findOneById(id);
        if(!communityMember){
            return 'delete success';
        }
        else{
            return 'delete fail';
        }
    }
}