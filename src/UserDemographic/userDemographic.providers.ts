import {Connection} from "typeorm";
import {UserDemographicEntity} from "./userDemographic.entity";

export const userDemographicProvider = {
    provide:'UserDemographicRepository',
    useFactory:(connection:Connection)=>connection.getRepository(UserDemographicEntity),
    inject:['TypeORMInstance']
}