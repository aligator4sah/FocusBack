import {Connection} from "typeorm";
import { SessionEntity} from "./session.entity";

export const sessionProvider = {
    provide:'SessionRepository',
    useFactory:(connection:Connection)=>connection.getRepository(SessionEntity),
    inject:['TypeORMInstance']
}