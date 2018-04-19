import {ICounty} from "./ICounty";
import {CountyEntity} from "../county.entity";

export interface ICountyService {
    getAllCounty():Promise<Array<CountyEntity>>;
    getCounty(id:number):Promise<CountyEntity|null>;
    addCounty(county: ICounty):Promise<CountyEntity>;
    updateCounty(id:number,newCounty:ICounty):Promise<CountyEntity|null>;
    deleteCounty(id:number):Promise<string>;
    getCountyByState(id:number):Promise<Array<CountyEntity>>;
}