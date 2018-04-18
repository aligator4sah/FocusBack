import {Connection} from "typeorm";
import {CommunityEntity} from "./community.entity";

export const communityProvider = {
    provide:'CommunityRepository',
    useFactory:(connection:Connection)=>connection.getRepository(CommunityEntity),
    inject:['TypeORMInstance']
}