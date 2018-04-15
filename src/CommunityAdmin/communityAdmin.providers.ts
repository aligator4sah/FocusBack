import { Connection } from 'typeorm';
import { CommunityAdminEntity} from "./communityAdmin.entity";

export const communityAdminProvider = {
    provide:'CommunityAdminRepository',
    useFactory:(connection: Connection)=>connection.getRepository(CommunityAdminEntity),
    inject:['TypeORMInstance']
}