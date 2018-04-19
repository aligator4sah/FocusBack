import { Component ,Inject} from "@nestjs/common";
import { CommunityMemberEntity } from "./communityMember.entity";
import { Repository,getConnection } from 'typeorm';
import { ICommunityMemberService, ICommunityMember} from "./Interfaces/index";

@Component()
export class CommunityMemberService implements ICommunityMemberService{

    constructor(
        @Inject('CommunityMemberRepository') private readonly communityMemberRepository: Repository<CommunityMemberEntity>
    ){}

    public async getAllCommunityMember(): Promise<Array<CommunityMemberEntity>>{
        return await this.communityMemberRepository.createQueryBuilder("communityMember").innerJoinAndSelect("communityMember.bhco","bhco").getMany()
    }

    public async getCommunityMember(id:number): Promise<CommunityMemberEntity | null>{
        return await this.communityMemberRepository.findOneById(id);
    }

    public async addCommunityMember(communityMember: ICommunityMember): Promise<CommunityMemberEntity>{
        await this.communityMemberRepository.save(communityMember);
        await getConnection().createQueryBuilder().relation(CommunityMemberEntity,"bhco").of(communityMember.id).set(communityMember.bhco)
        return await this.getCommunityMember(communityMember.id);
    }

    public async updateCommunityMember(id:number,newCommunityMember: ICommunityMember): Promise<CommunityMemberEntity | null>{
        const commmunityMember = await this.communityMemberRepository.findOneById(id);
        if(!commmunityMember.id){
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