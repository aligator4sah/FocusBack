import { Component ,Inject} from "@nestjs/common";
import { Repository, getRepository, getConnection } from 'typeorm';
import { CityEntity} from "./city.entity";
import { ICity,ICityService} from "./Interfaces";

@Component()
export class CityService implements ICityService{
    constructor(
        @Inject('CityRepository') private readonly cityRepository:Repository<CityEntity>
    ){}

    public async getAllCity():Promise<Array<CityEntity>>{
        return await this.cityRepository.find();
    }

    public async getCity(id:number):Promise<CityEntity|null>{
        return await this.cityRepository.findOneById(id);
    }

    public async addCity(city: ICity):Promise<CityEntity>{
        const selectedCity =  await this.cityRepository.save(city);
        await getConnection().createQueryBuilder().relation(CityEntity,"county").of(selectedCity.id).set(city.county);
        return selectedCity;
    }

    public async updateCity(id:number,newCity: ICity):Promise<CityEntity|null>{
        const city = await this.cityRepository.findOneById(id);
        if(!city){
            console.log('city does not exist');
        }
        await this.cityRepository.updateById(id,newCity);
        return this.cityRepository.findOneById(id);
    }

    public async deleteCity(id:number):Promise<string>{
        await this.cityRepository.deleteById(id);
        const city = await this.cityRepository.findOneById(id);
        if(id){
            return 'delete fail';
        }else{
            return 'delete success';
        }
    }

    public async  getCityByCounty(id:number):Promise<Array<CityEntity>>{
        const selectedCity = await getRepository(CityEntity)
            .createQueryBuilder("city")
            .leftJoinAndSelect("city.county","county")
            .where("county.id = :name",{name:id})
            .getMany();

        return selectedCity;
    }
}