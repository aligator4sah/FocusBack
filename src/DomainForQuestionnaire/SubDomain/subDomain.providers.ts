import {Connection} from "typeorm";
import {SubDomainEntity} from "./subDomain.entity";

export const subDomainProvider = {
    provide:'SubDomainRepository',
    useFactory:(connection:Connection)=>connection.getRepository(SubDomainEntity),
    inject:['TypeORMInstance']
}