import {Connection} from "typeorm";
import {StateEntity} from "./state.entity";

export const stateProvider = {
    provide:'StateRepository',
    useFactory:(connection:Connection)=>connection.getRepository(StateEntity),
    inject:['TypeORMInstance']
}