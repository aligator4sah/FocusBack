import { Component ,Inject} from "@nestjs/common";
import {getRepository, Repository} from 'typeorm';
import { ICommunityAdmin,ICommunityService} from "./Interfaces";
import { CommunityAdminEntity} from "./communityAdmin.entity";
import {CommunityEntity} from "../Community/community.entity";
import {CityEntity} from "../City/city.entity";
import {CountyEntity} from "../County/county.entity";
import {StateEntity} from "../State/state.entity";
import { CommunityMemberEntity } from '../CommunityMembers/communityMember.entity';
import { BlockEntity } from '../Block/block.entity';
import { async } from 'rxjs/scheduler/async';

@Component()
export class CommunityAdminService implements ICommunityService{
    constructor(
        @Inject('CommunityAdminRepository') private readonly communityAdminRepository: Repository<CommunityAdminEntity>
    ){}

    public async getAllCommunityAdmin():Promise<Array<CommunityAdminEntity>>{
        return await this.communityAdminRepository.find();
    }

    public async getCommunityAdmin(id:number):Promise<CommunityAdminEntity | null>{
        const selectedCommunityAdmin = await this.communityAdminRepository.findOneById(id);
        selectedCommunityAdmin["role"] = "communityAdmin";
        return selectedCommunityAdmin;
    }

    public async getCommunityAdminByState(stateId:number):Promise<Array<CommunityAdminEntity>>{
        const selectedState = await getRepository(StateEntity).findOne({id:stateId});
        return await this.communityAdminRepository.find({state:selectedState.state});
    }

    public async addCommunityAdmin(communityAdmin:ICommunityAdmin): Promise<CommunityAdminEntity>{
        return await this.communityAdminRepository.save(communityAdmin);
    }

    public async updateCommunityAdmin(id:number,newCommunityAdmin:ICommunityAdmin): Promise<CommunityAdminEntity | null>{
        const communityAdmin = await this.communityAdminRepository.findOneById(id);
        if(!communityAdmin){
            console.log('community admin does not exist');
        }
        await this.communityAdminRepository.updateById(id,newCommunityAdmin);
        return this.communityAdminRepository.findOneById(id);

    }

    public async deleteCommunityAdmin(id:number):Promise<string>{
        await this.communityAdminRepository.deleteById(id);
        const communityAdmin = await this.communityAdminRepository.findOneById(id);
        if(!communityAdmin){
            return 'delete success';
        }else{
            return 'delete fail';
        }
    }

    public async getCommunityRelatedInfo(communityId:number):Promise<object>{
        const selectedCommunity = await getRepository(CommunityEntity)
            .createQueryBuilder("community").leftJoinAndSelect("community.city","city")
            .where("community.id = :id",{id:communityId}).getOne();
        const community = await selectedCommunity.community;
        // return await selectedCommunity;
        const selectedCity = await getRepository(CityEntity)
            .createQueryBuilder("city").leftJoinAndSelect("city.county","county")
            .where("city.id = :id",{id:selectedCommunity.city.id}).getOne();
        const city = await selectedCity.city;
        const selectedCounty = await getRepository(CountyEntity)
            .createQueryBuilder("county").leftJoinAndSelect("county.state","state")
            .where("county.id = :id",{id:selectedCity.county.id}).getOne();
        const county = await selectedCounty.county;
        const selectedState = await getRepository(StateEntity)
            .createQueryBuilder("state").where("state.id = :id",{id:selectedCounty.state.id}).getOne();
        const state = await selectedState.state;
        return await {community,city,county,state};
    }

    public async countCommunityMemberInCurrentCommunity(communityId:number):Promise<number>{
        return await getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
        .innerJoinAndSelect("communityMember.community","community")
        .where("communityMember.community = :community",{community:communityId}).getCount();
    }

    public async countBlockInCurrentCommunity(communityId:number):Promise<number>{
      return await getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
        .innerJoinAndSelect("communityMember.community","community")
        .where("communityMember.community = :community",{community:communityId})
        .groupBy("communityMember.block").getCount();
    }

    public async countFamilyInCurrentCommunity(communityId:number):Promise<number>{
      return await getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
        .innerJoinAndSelect("communityMember.community","community")
        .where("communityMember.community = :community",{community:communityId})
        .groupBy("communityMember.family").getCount();
    }

    public async countCommunityMemberByGenderInCurrentCommunity(communityId:number):Promise<number>{
      return await getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
        .innerJoinAndSelect("communityMember.community","community")
        .where("communityMember.community = :community",{community:communityId})
        .orderBy("communityMember.gender")
        .getCount();
    }

    public async countCommunityMemberByRaceInCurrentCommunity(communityId:number):Promise<number>{
      return await getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
        .innerJoinAndSelect("communityMember.community","community")
        .where("communityMember.community = :community",{community:communityId})
        .orderBy("communityMember.race")
        .getCount();
    }

    public async countCommunityMemberByMarryInCurrentCommunity(communityId:number):Promise<number>{
        return await getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
         .innerJoinAndSelect("communityMember.community","community")
         .where("communityMember.community = :community",{community:communityId})
         .orderBy("communityMember.marry")
         .getCount();
    }

    public async countCommunityMemberByEducationInCurrentCommunity(communityId:number):Promise<number>{
        return await getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
         .innerJoinAndSelect("communityMember.community","community")
         .where("communityMember.community = :community",{community:communityId})
         .orderBy("communityMember.education")
         .getCount();
    }

  public async countCommunityMemberByEmploymentsInCurrentCommunity(communityId:number):Promise<number>{
    return await getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
      .innerJoinAndSelect("communityMember.community","community")
      .where("communityMember.community = :community",{community:communityId})
      .orderBy("communityMember.employments")
      .getCount();
  }

}