import {Connection} from "typeorm";
import {AnswerEntity} from "./answer.entity";

export const answerProvider = {
    provide:'AnswerRepository',
    useFactory:(connection:Connection)=>connection.getRepository(AnswerEntity),
    inject:['TypeORMInstance']
}