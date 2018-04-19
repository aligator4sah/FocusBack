import {Connection} from "typeorm";
import {FamilyEntity} from "./family.entity";

export const familyProvider = {
    provide:'FamilyRepository',
    useFactory:(connection:Connection)=>connection.getRepository(FamilyEntity),
    inject:['TypeORMInstance']
}