import {Component} from "@nestjs/common";
import {DomainEntity} from "./domain.entity";
import {Connection} from "typeorm";

export const domainProvider={
    provide:'DomainRepository',
    useFactory:(connection:Connection)=>connection.getRepository(DomainEntity),
    inject:['TypeORMInstance']
}
