import { CityEntity} from "../city.entity";
import { ICity} from "./ICity";

export interface ICityService {
    getAllCity():Promise<Array<CityEntity>>;
    getCity(id:number):Promise<CityEntity|null>;
    addCity(city: ICity):Promise<CityEntity>;
    updateCity(id:number,newCity: ICity):Promise<CityEntity|null>;
    deleteCity(id:number):Promise<string>;
    getCityByCounty(id:number):Promise<Array<CityEntity>>;
}