import { Component ,Inject} from "@nestjs/common";
import { Repository, getRepository, getConnection } from 'typeorm';
import { CountyEntity} from "./county.entity";
import {ICounty,ICountyService} from "./Interfaces";

@Component()
export class CountyService implements ICountyService{
    constructor(
        @Inject('CountyRepository') private readonly countyRepository: Repository<CountyEntity>
    ){}

    public async getAllCounty():Promise<Array<CountyEntity>>{
        return await this.countyRepository.find();
    }

    public async getCounty(id:number):Promise<CountyEntity|null>{
        return await this.countyRepository.findOneById(id);
    }

    public async addCounty(county: ICounty):Promise<CountyEntity>{
        const selectedCounty =  await this.countyRepository.save(county);
        await getConnection().createQueryBuilder().relation(CountyEntity,"state").of(selectedCounty.id).set(county.state);
        return selectedCounty;
    }

    public async updateCounty(id:number,newCounty:ICounty):Promise<CountyEntity|null>{
        const county = await this.countyRepository.findOneById(id);
        if(!county){
            console.log('county does not exist');
        }
        await this.countyRepository.updateById(id,newCounty);
        return this.countyRepository.findOneById(id);
    }

    public async deleteCounty(id:number):Promise<string>{
        await this.countyRepository.deleteById(id);
        const county = await this.countyRepository.findOneById(id);
        if(county){
            return 'delete fail';
        }else{
            return 'delete success';
        }
    }

    public async getCountyByState(id:number):Promise<Array<CountyEntity>>{
        const selectedCounty = await getRepository(CountyEntity)
            .createQueryBuilder("county")
            .leftJoinAndSelect("county.state","state")
            .where("state.id = :name",{name:id})
            .getMany();
        return selectedCounty;
    }
}