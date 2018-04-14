import { Connection } from 'typeorm';
import {BhcoEntity} from "./bhco.entity";

export const bhcoProvider ={
    provide:'BhcoRepository',
    useFactory:(connection:Connection)=>connection.getRepository(BhcoEntity),
    inject:['TypeORMInstance']
}