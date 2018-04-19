import {Connection} from "typeorm";
import {CountyEntity} from "./county.entity";

export const countyProvider = {
    provide:'CountyRepository',
    useFactory:(connection:Connection)=>connection.getRepository(CountyEntity),
    inject:['TypeORMInstance']
}