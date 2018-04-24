import { Component ,Inject} from "@nestjs/common";
import {Repository, getRepository, getConnection} from 'typeorm';
import { FamilyEntity} from "./family.entity";
import { IFamily,IFamilyService} from "./Interfaces";

@Component()
export class FamilyService implements IFamilyService{
    constructor(
        @Inject('FamilyRepository') private readonly familyRepository: Repository<FamilyEntity>
    ){}

    public async getAllFamily():Promise<Array<FamilyEntity>>{
        return await this.familyRepository.find();
    }

    public async getFamily(id:number):Promise<FamilyEntity|null>{
        return await this.familyRepository.findOneById(id);
    }

    public async addFamily(InFamily:IFamily):Promise<FamilyEntity>{
        await this.familyRepository.save(InFamily)
        const requestFamily = await this.familyRepository.findOne({family:InFamily.family});
        await getConnection().createQueryBuilder().relation(FamilyEntity,"block").of(requestFamily.id).set(InFamily.block);
        return await this.familyRepository.findOneById(requestFamily.id);
    }

    public async updateFamily(id:number,newFamily:IFamily):Promise<FamilyEntity|null>{
        const family = await this.familyRepository.findOneById(id);
        if(!family){
            console.log('family does not exist');
        }
        await this.familyRepository.updateById(id,newFamily);
        return this.familyRepository.findOneById(id);
    }

    public async deleteFamily(id:number):Promise<string>{
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