import { Component ,Inject} from "@nestjs/common";
import { Repository } from 'typeorm';
import { IDemographicService,IDemographic} from "./Interfaces";
import { DemographicEntity} from "./demographic.entity";

@Component()
export class DemographicService implements IDemographicService{
    constructor(
        @Inject('DemographicRepository') private readonly demographicRepository: Repository<DemographicEntity>
    ){}

    public async getAllDemographic():Promise<Array<DemographicEntity>>{
        return await this.demographicRepository.find();
    }

    public async getDemographic(id:number):Promise<DemographicEntity|null>{
        return await this.demographicRepository.findOneById(id);
    }

    public async addDemographic(demographic:IDemographic):Promise<DemographicEntity>{
        return await this.demographicRepository.save(demographic);
    }

    public async updateDemographic(id:number,newDemographic: IDemographic):Promise<DemographicEntity|null>{
        const demographic = await this.demographicRepository.findOneById(id);
        if(!demographic){
            console.log('demographic does not exist');
        }
        await this.demographicRepository.updateById(id,newDemographic);
        return this.demographicRepository.findOneById(id);
    }
    public async deleteDemographic(id:number):Promise<string>{
        await this.demographicRepository.deleteById(id);
        const demographic = await this.demographicRepository.findOneById(id);
        if(demographic){
            return 'delete fail';
        }else{
            return 'delete success';
        }
    }
}