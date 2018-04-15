import { Connection } from 'typeorm';
import { SystemAdminEntity} from "./systemAdmin.entity";

export const systemAdminProvider = {
    provide:'SystemAdminRepository',
    useFactory:(connection: Connection)=>connection.getRepository(SystemAdminEntity),
    inject:['TypeORMInstance']
}