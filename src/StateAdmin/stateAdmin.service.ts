import { getConnection, Repository } from 'typeorm';
import { Component ,Inject} from "@nestjs/common";
import { StateAdminEntity} from "./stateAdmin.entity";
import {IStateAdmin,IStateAdminService} from "./Interfaces";
import { StateEntity } from '../State/state.entity';
import { CommunityMemberEntity } from '../CommunityMembers/communityMember.entity';
import { BhcoEntity } from '../Bhco/bhco.entity';
import { async } from 'rxjs/scheduler/async';
import { CommunityEntity } from '../Community/community.entity';

@Component()
export class StateAdminService implements IStateAdminService{
    constructor(
        @Inject('StateAdminRepository') private readonly stateAdminRepository: Repository<StateAdminEntity>
    ){}

    public async getAllStateAdmin():Promise<Array<StateAdminEntity>>{
        return await this.stateAdminRepository.find();
    }

    public async getStateAdmin(id:number):Promise<StateAdminEntity | null>{
        const selectedStateAdmin =  await this.stateAdminRepository.findOneById(id);
        selectedStateAdmin["role"] = "stateAdmin";
        return selectedStateAdmin;
    }

    public async addStateAdmin(stateAdmin:IStateAdmin):Promise<StateAdminEntity>{
        return await this.stateAdminRepository.save(stateAdmin);
    }

    public async updateStateAdmin(id:number,newStateAdmin: IStateAdmin): Promise<StateAdminEntity | null>{
        const stateAdmin = await this.stateAdminRepository.findOneById(id);
        if(!stateAdmin){
            console.log('state admin does not exist');
        }
        else{
           await this.stateAdminRepository.updateById(id,newStateAdmin);
           return this.stateAdminRepository.findOneById(id);
        }
    }

    public async deleteStateAdmin(id:number):Promise<string>{
        await this.stateAdminRepository.deleteById(id);
        const stateAdmin = await this.stateAdminRepository.findOneById(id);
        if(!stateAdmin){
            return 'delete success';
        }
        else{
            return 'delete fail';
        }
    }

    public async countCommunityMemberInCurrentState(stateId:number):Promise<number>{
        const selectedState = await getConnection().getRepository(StateEntity).createQueryBuilder("state")
          .where("state.id = :id",{id:stateId}).getOne();

        const state:string = selectedState.state;

        return await getConnection().getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
          .where("communityMember.state = :state",{state:state}).getCount();
    }

    public async countCommunityMemberGroupByCountyInCurrentState(stateId:number):Promise<object>{
      const selectedState = await getConnection().getRepository(StateEntity).createQueryBuilder("state")
        .where("state.id = :id",{id:stateId}).getOne();

      const state:string = selectedState.state;

      return await getConnection().getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
        .where("communityMember.state = :state",{state:state})
        .select("communityMember.county AS county")
        .addSelect("COUNT(*) AS count")
        .groupBy("communityMember.county")
        .getRawMany();
    }

  public async countCommunityMemberGroupByCityInCurrentState(stateId:number):Promise<object>{
    const selectedState = await getConnection().getRepository(StateEntity).createQueryBuilder("state")
      .where("state.id = :id",{id:stateId}).getOne();

    const state:string = selectedState.state;

    return await getConnection().getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
      .where("communityMember.state = :state",{state:state})
      .select("communityMember.city AS city")
      .addSelect("COUNT(*) AS count")
      .groupBy("communityMember.city")
      .getRawMany();
  }

  public async countCommunityMemberGroupByCommunityInCurrentState(stateId:number): Promise<object> {
      const selectedState = await  getConnection().getRepository(StateEntity).createQueryBuilder("state")
        .where("state.id = :id",{id:stateId}).getOne();
      const state:string = selectedState.state;
      return  await getConnection().getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
      .where("communityMember.state = :state",{state:state})
      .select("communityMember.community AS community")
      .addSelect("COUNT(*) AS count")
      .groupBy("communityMember.community")
      .getRawMany();
    // let result:any;
    //  result = Promise.all(preResult.map(async(item) => {
    //   item["communityName"] = await getConnection().getRepository(CommunityEntity).createQueryBuilder("community")
    //     .where("community.id = :id",{id: item.community});
    //   return item;
    // }));
    // return result;
  }

  public async countBhcoGroupInCurrentState(stateId: number): Promise<number> {
    const selectedState = await getConnection().getRepository(StateEntity).createQueryBuilder("state")
      .where("state.id = :id",{id:stateId}).getOne();

    const state:string = selectedState.state;
    return await getConnection().getRepository(BhcoEntity).createQueryBuilder("bhco").
      where('bhco.state = :state',{state: state}).getCount();
  }

  public async countCommunityMemberByGenderInCurrentState(stateId:number):Promise<object>{
    const selectedState = await getConnection().getRepository(StateEntity).createQueryBuilder("state")
      .where("state.id = :id",{id:stateId}).getOne();

    const state:string = selectedState.state;

    return await getConnection().getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
      .where("communityMember.state = :state",{state:state})
      .select("communityMember.gender AS gender")
      .addSelect("COUNT(*) AS count")
      .groupBy("communityMember.gender")
      .getRawMany();
  }

  public async countCommunityMemberByRaceInCurrentState(stateId:number):Promise<object>{
    const selectedState = await getConnection().getRepository(StateEntity).createQueryBuilder("state")
      .where("state.id = :id",{id:stateId}).getOne();

    const state:string = selectedState.state;

    return await getConnection().getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
      .where("communityMember.state = :state",{state:state})
      .select("communityMember.race AS race")
      .addSelect("COUNT(*) AS count")
      .groupBy("communityMember.race")
      .getRawMany();
  }

  public async countCommunityMemberByMarryInCurrentState(stateId:number):Promise<object>{
    const selectedState = await getConnection().getRepository(StateEntity).createQueryBuilder("state")
      .where("state.id = :id",{id:stateId}).getOne();

    const state:string = selectedState.state;

    return await getConnection().getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
      .where("communityMember.state = :state",{state:state})
      .select("communityMember.marry AS marry")
      .addSelect("COUNT(*) AS count")
      .groupBy("communityMember.marry")
      .getRawMany();
  }

  public async countCommunityMemberByEducationInCurrentState(stateId:number):Promise<object>{
    const selectedState = await getConnection().getRepository(StateEntity).createQueryBuilder("state")
      .where("state.id = :id",{id:stateId}).getOne();

    const state:string = selectedState.state;

    return await getConnection().getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
      .where("communityMember.state = :state",{state:state})
      .select("communityMember.education AS education")
      .addSelect("COUNT(*) AS count")
      .groupBy("communityMember.education")
      .getRawMany();
  }


  public async countCommunityMemberByEmploymentsInCurrentState(stateId:number):Promise<object>{
    const selectedState = await getConnection().getRepository(StateEntity).createQueryBuilder("state")
      .where("state.id = :id",{id:stateId}).getOne();

    const state:string = selectedState.state;

    return await getConnection().getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
      .where("communityMember.state = :state",{state:state})
      .select("communityMember.employments AS employments")
      .addSelect("COUNT(*) AS count")
      .groupBy("communityMember.employments")
      .getRawMany();
  }

  public async countCommunityMemberByAgeInCurrentState(stateId:number):Promise<object[]>{
    const selectedState = await getConnection().getRepository(StateEntity).createQueryBuilder("state")
      .where("state.id = :id",{id:stateId}).getOne();

    const state:string = selectedState.state;

    const selectedCommunityMember = await getConnection().getRepository(CommunityMemberEntity).createQueryBuilder("communityMember")
      .where("communityMember.state = :state",{state:state})
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