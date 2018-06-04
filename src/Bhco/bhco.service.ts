import { Component ,Inject} from "@nestjs/common";
import {getConnection, getRepository, Repository} from 'typeorm';
import {BhcoEntity} from "./bhco.entity";
import {IBcho,IBhcoService} from "./Interfaces";
import {StateEntity} from "../State/state.entity";
import {CommunityEntity} from "../Community/community.entity";
import { CommunityMemberEntity } from '../CommunityMembers/communityMember.entity';

@Component()
export class BhcoService implements IBhcoService{
    constructor(
        @Inject('BhcoRepository') private readonly bhcoRepository: Repository<BhcoEntity>
    ){}

    public async getAllBhco():Promise<Array<BhcoEntity>>{
        return await this.bhcoRepository.find();
    }

    public async getAllBhcoByCommunity(communityId:number):Promise<Array<BhcoEntity>>{
        const selectedCommunity = await getRepository(CommunityEntity).findOne({id:communityId});
        return await this.bhcoRepository.find({community:selectedCommunity.community});
    }

    public async getAllBhcoByState(stateId:number):Promise<Array<BhcoEntity>>{
        const selectedState = await getRepository(StateEntity).findOne({id:stateId});
        return await this.bhcoRepository.find({state:selectedState.state});
    }

    public async getBhco(id:number):Promise<BhcoEntity|null>{
        const selectedBhco = await this.bhcoRepository.findOneById(id);
        selectedBhco["role"] = "bhco";
        return selectedBhco;
    }

    public async addBhco(bhco: IBcho): Promise<BhcoEntity>{
        return await this.bhcoRepository.save(bhco);
    }

    public async updateBhco(id:number,newBhco:IBcho): Promise<BhcoEntity|null>{
        const bhco = await this.bhcoRepository.findOneById(id);
        if(!bhco.id){
            console.log("bhco does not exist");
        }
        await this.bhcoRepository.updateById(id,newBhco);
        return await this.bhcoRepository.findOneById(id);
    }

    public async deleteBhco(id:number): Promise<string>{
        await this.bhcoRepository.deleteById(id);
        let bhco = await this.bhcoRepository.findOneById(id);
        if(!bhco){
            return 'delete success';
        }else{
            return 'delete fail';
        }
    }

    public async countCommunityMemberInCurrentBhco(bhcoId:number):Promise<number>{
      return await getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
        .innerJoinAndSelect("communityMember.bhco","bhco")
        .where("communityMember.bhco = :bhco",{bhco:bhcoId}).getCount();
    }

  public async countCommunityMemberByGenderInCurrentBhco(bhcoId:number):Promise<object>{
    return await getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
      .innerJoinAndSelect("communityMember.bhco","bhco")
      .where("communityMember.bhco = :bhco",{bhco:bhcoId})
      .select("communityMember.gender AS gender")
      .addSelect("COUNT(*) AS count")
      .groupBy("communityMember.gender")
      .getRawMany();
  }

  public async countCommunityMemberByRaceInCurrentBhco(bhcoId:number):Promise<object>{
    return await getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
      .innerJoinAndSelect("communityMember.bhco","bhco")
      .where("communityMember.bhco = :bhco",{bhco:bhcoId})
      .select("communityMember.race AS race")
      .addSelect("COUNT(*) AS count")
      .groupBy("communityMember.race")
      .getRawMany();
  }

  public async countCommunityMemberByMarryInCurrentBhco(bhcoId:number):Promise<object>{
    return await getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
      .innerJoinAndSelect("communityMember.bhco","bhco")
      .where("communityMember.bhco = :bhco",{bhco:bhcoId})
      .select("communityMember.marry AS marry")
      .addSelect("COUNT(*) AS count")
      .groupBy("communityMember.marry")
      .getRawMany();
  }

  public async countCommunityMemberByEducationInCurrentBhco(bhcoId:number):Promise<object>{
    return await getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
      .innerJoinAndSelect("communityMember.bhco","bhco")
      .where("communityMember.bhco = :bhco",{bhco:bhcoId})
      .select("communityMember.education AS education")
      .addSelect("COUNT(*) AS count")
      .groupBy("communityMember.education")
      .getRawMany();

  }

  public async countCommunityMemberByEmploymentsInCurrentBhco(bhcoId:number):Promise<object>{
    return await getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
      .innerJoinAndSelect("communityMember.bhco","bhco")
      .where("communityMember.bhco = :bhco",{bhco:bhcoId})
      .select("communityMember.employments AS employments")
      .addSelect("COUNT(*) AS count")
      .groupBy("communityMember.employments")
      .getRawMany();
  }

  public async countCommunityMemberByAgeInCurrentBhco(bhcoId:number):Promise<object[]>{
    const selectedCommunityMember = await getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
      .innerJoinAndSelect("communityMember.bhco","bhco")
      .where("communityMember.bhco = :bhco",{bhco:bhcoId})
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