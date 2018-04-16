import {IDemographic} from "./IDemographic";
import {DemographicEntity} from "../demographic.entity";

export interface IDemographicService {
    getAllDemographic():Promise<Array<DemographicEntity>>;
    getDemographic(id:number):Promise<DemographicEntity|null>;
    addDemographic(demographic:IDemographic):Promise<DemographicEntity>;
    updateDemographic(id:number,newDemographic: IDemographic):Promise<DemographicEntity|null>;
    deleteDemographic(id:number):Promise<string>;
}