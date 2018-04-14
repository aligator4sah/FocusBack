import { Connection } from 'typeorm';
import { StateAdminEntity} from "./stateAdmin.entity";

export const stateAdminProvider = {
    provide:'StateAdminRepository',
    useFactory:(connection:Connection)=>connection.getRepository(StateAdminEntity),
    inject:['TypeORMInstance']
}