import { getConnection, Repository } from 'typeorm';
import { Component ,Inject} from "@nestjs/common";
import { SystemAdminEntity} from "./systemAdmin.entity";
import { ISystemAdmin,ISystemAdminService} from "./Interfaces";
import { CommunityMemberEntity } from '../CommunityMembers/communityMember.entity';
import { BhcoEntity } from '../Bhco/bhco.entity';


@Component()
export class SystemAdminService implements ISystemAdminService{
    constructor(
        @Inject('SystemAdminRepository') private readonly systemAdminRepository :Repository<SystemAdminEntity>
    ){}

    public async getAllSystemAdmin():Promise<Array<SystemAdminEntity>>{
        return await this.systemAdminRepository.find();
    }

    public async getSystemAdmin(id:number):Promise<SystemAdminEntity | null>{
        return await this.systemAdminRepository.findOneById(id);
    }

    public async addSystemAdmin(systemAdmin:ISystemAdmin):Promise<SystemAdminEntity>{
        return await  this.systemAdminRepository.save(systemAdmin);
    }

    public async updateSystemAdmin(id:number,newSystemAdmin:ISystemAdmin):Promise<SystemAdminEntity|null>{
        const systemAdmin = await this.systemAdminRepository.findOneById(id);
        if(!systemAdmin){
            console.log("system admin does not exist");
        }else{
            await this.systemAdminRepository.updateById(id,newSystemAdmin);
            return await this.systemAdminRepository.findOneById(id);
        }
    }

    public async deleteSystemAdmin(id:number):Promise<string>{
        await this.systemAdminRepository.deleteById(id);
        const systemAdmin = await this.systemAdminRepository.findOneById(id);
        if(!systemAdmin){
            return 'delete success';
        }else{
            return 'delete fail';
        }
    }

    public async countCommunityMemberInSystem():Promise<number>{
        return await getConnection().getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
          .getCount();
    }

    public async countCommunityMemberGroupByState():Promise<object>{
        return await getConnection().getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
          .select("communityMember.state AS state")
          .addSelect("COUNT(*) AS count")
          .groupBy("communityMember.state")
          .getRawMany();
    }

    public async countCommunityMemberGroupByCity():Promise<object>{
        return await getConnection().getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
            .select("communityMember.city AS city")
            .addSelect("COUNT(*) AS count")
            .groupBy("communityMember.city")
            .getRawMany();
    }

    public async countCommunityMemberGroupByCommunity(): Promise<object> {
        return await getConnection().getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
            .select("communityMember.community AS community")
            .addSelect("COUNT(*) AS count")
            .groupBy("communityMember.community")
            .getRawMany();
    }

    public async countCommunityMemberByGenderInSystem():Promise<object>{
      return await getConnection().getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
        .select("communityMember.gender AS gender")
        .addSelect("COUNT(*) AS count")
        .groupBy("communityMember.gender")
        .getRawMany();
    }

  public async countCommunityMemberByRaceInSystem():Promise<object>{
    return await getConnection().getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
      .select("communityMember.race AS race")
      .addSelect("COUNT(*) AS count")
      .groupBy("communityMember.race")
      .getRawMany();
  }

  public async countCommunityMemberByMarryInSystem():Promise<object>{
    return await getConnection().getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
      .select("communityMember.marry AS marry")
      .addSelect("COUNT(*) AS count")
      .groupBy("communityMember.marry")
      .getRawMany();
  }

  public async countCommunityMemberByEducationInSystem():Promise<object>{
    return await getConnection().getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
      .select("communityMember.education AS education")
      .addSelect("COUNT(*) AS count")
      .groupBy("communityMember.education")
      .getRawMany();
  }

  public async countCommunityMemberByEmploymentsInSystem():Promise<object>{
    return await getConnection().getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
      .select("communityMember.employments AS employments")
      .addSelect("COUNT(*) AS count")
      .groupBy("communityMember.employments")
      .getRawMany();
  }

  public async countCommunityMemberByAgeInSystem():Promise<object>{
    const selectedCommunityMember = await getConnection().getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
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

  public async countBhcoInSystem(): Promise<number> {
      return await getConnection().getRepository(BhcoEntity).createQueryBuilder().getCount();
  }
}