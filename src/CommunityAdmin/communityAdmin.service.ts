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
      const blockNumber =  await getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
        .innerJoinAndSelect("communityMember.community","community")
        .where("communityMember.community = :community",{community:communityId})
        .select("communityMember.block AS block")
        .addSelect("COUNT(*) AS count")
        .groupBy("communityMember.block")
        .getRawMany();
      return blockNumber.length;

    }

    public async countFamilyInCurrentCommunity(communityId:number):Promise<number>{
      const familyNumber = await getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
        .innerJoinAndSelect("communityMember.community","community")
        .where("communityMember.community = :community",{community:communityId})
        .select("communityMember.family AS family")
        .addSelect("COUNT(*) AS count")
        .groupBy("communityMember.family")
        .getRawMany();
      return familyNumber.length;
    }

    public async countCommunityMemberByGenderInCurrentCommunity(communityId:number):Promise<object>{
      return await getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
        .innerJoinAndSelect("communityMember.community","community")
        .where("communityMember.community = :community",{community:communityId})
        .select("communityMember.gender AS gender")
        .addSelect("COUNT(*) AS count")
        .groupBy("communityMember.gender")
        .getRawMany();
    }

    public async countCommunityMemberByRaceInCurrentCommunity(communityId:number):Promise<object>{
     return await getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
        .innerJoinAndSelect("communityMember.community","community")
        .where("communityMember.community = :community",{community:communityId})
        .select("communityMember.race AS race")
        .addSelect("COUNT(*) AS count")
        .groupBy("communityMember.race")
        .getRawMany();
    }

    public async countCommunityMemberByMarryInCurrentCommunity(communityId:number):Promise<object>{
        return await getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
         .innerJoinAndSelect("communityMember.community","community")
         .where("communityMember.community = :community",{community:communityId})
          .select("communityMember.marry AS marry")
          .addSelect("COUNT(*) AS count")
          .groupBy("communityMember.marry")
          .getRawMany();
    }

    public async countCommunityMemberByEducationInCurrentCommunity(communityId:number):Promise<object>{
        return await getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
         .innerJoinAndSelect("communityMember.community","community")
         .where("communityMember.community = :community",{community:communityId})
          .select("communityMember.education AS education")
          .addSelect("COUNT(*) AS count")
          .groupBy("communityMember.education")
          .getRawMany();

    }

  public async countCommunityMemberByEmploymentsInCurrentCommunity(communityId:number):Promise<object>{
    return await getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
      .innerJoinAndSelect("communityMember.community","community")
      .where("communityMember.community = :community",{community:communityId})
      .select("communityMember.employments AS employments")
      .addSelect("COUNT(*) AS count")
      .groupBy("communityMember.employments")
      .getRawMany();
  }

  public async countCommunityMemberByAgeInCurrentCommunity(communityId:number):Promise<object[]>{
        const selectedCommunityMember = await getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
          .innerJoinAndSelect("communityMember.community","community")
          .where("communityMember.community = :community",{community:communityId})
          .getMany();
    let year = new Date().getFullYear();
    console.log(year);
    let A:number = 0;
    let B:number = 0;
    let C:number = 0;
    let D:number = 0;
    let E:number = 0;
    let F:number = 0;
        selectedCommunityMember.forEach((item) => {
          let gap = year - Number(item.date.substring(0,4));
          if(gap > 65){
            F++;
          }else if(gap > 50){
            E++;
          }else if(gap > 40){
            D++;
          }else if(gap > 30){
            C++;
          }else if(gap > 18){
            B++;
          }else{
            A++;
          }
        })
    return [{type:"0-18",count:A},{type:"18-30",count:B},{type:"30-40",count:C},{type:"40-50",count:D},{type:"50-65",count:E},{type:"65+",count:F}];
  }

}