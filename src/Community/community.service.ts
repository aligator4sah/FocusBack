import { Component ,Inject} from "@nestjs/common";
import { Repository } from 'typeorm';
import {CommunityEntity} from "./community.entity";
import { ICommunity,ICommunityService} from "./Interfaces";

@Component()
export class CommunityService implements ICommunityService{
    constructor(
        @Inject('CommunityRepository') private readonly communityRepository: Repository<CommunityEntity>
    ){}

    public async getAllCommunity():Promise<Array<CommunityEntity>>{
        return await this.communityRepository.find();
    }
    public async getCommunity(id:number):Promise<CommunityEntity|null>{
        return await this.communityRepository.findOneById(id);
    }
    public async addCommunity(community: ICommunity):Promise<CommunityEntity>{
        return await this.communityRepository.save(community);
    }
    public async updateCommunity(id:number,newCommunity:ICommunity):Promise<CommunityEntity|null>{
        const community = await this.communityRepository.findOneById(id);
        if(!community){
            console.log('community does not exist');
        }
        await this.communityRepository.updateById(id,newCommunity);
        return await this.communityRepository.findOneById(id);
    }
    public async deleteCommunity(id:number):Promise<string>{
        await this.communityRepository.deleteById(id);
        const community = await this.communityRepository.findOneById(id);
        if(community){
            return 'delete fail';
        }else{
            return 'delete success';
        }
    }
}