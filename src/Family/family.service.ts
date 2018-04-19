import { Component ,Inject} from "@nestjs/common";
import { Repository,getRepository } from 'typeorm';
import { FamilyEntity} from "./family.entity";
import { IFamily,IFamilyService} from "./Interfaces";

@Component()
export class FamilyService {
    constructor(
        @Inject('FamilyRepository') private readonly familyRepository: Repository<FamilyEntity>
    ){}

    public async getAllFamily():Promise<Array<FamilyEntity>>{
        return await this.familyRepository.find();
    }

    public async getFamily(id:number):Promise<FamilyEntity|null>{
        return await this.familyRepository.findOneById(id);
    }

    public async addFamily(family:IFamily):Promise<FamilyEntity>{
        return await this.familyRepository.save(family);
    }

    public async updateFamily(id:number,newFamily:IFamily):Promise<FamilyEntity|null>{
        const family = await this.familyRepository.findOneById(id);
        if(!family){
            console.log('family does not exist');
        }
        await this.familyRepository.updateById(id,newFamily);
        return this.familyRepository.findOneById(id);
    }

    public async deleteBlock(id:number):Promise<string>{
        await this.familyRepository.deleteById(id);
        const family = await this.familyRepository.findOneById(id);
        if(family){
            return 'delete fail';
        }else{
            return 'delete success';
        }
    }

    public async getFamilyByBlock(id:number):Promise<Array<FamilyEntity>>{
        const selectedFamily = getRepository(FamilyEntity)
            .createQueryBuilder("family")
            .leftJoinAndSelect("family.block","block")
            .where("block.id = :name",{name:id})
            .getMany();

        return selectedFamily;
    }
}