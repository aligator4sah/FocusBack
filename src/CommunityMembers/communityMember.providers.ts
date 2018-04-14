import { Connection, Repository } from 'typeorm';
import { CommunityMemberEntity} from "./communityMember.entity";

export const communityMemberProvider = {
    provide: 'CommunityMemberRepository',
    useFactory:(connection:Connection)=>connection.getRepository(CommunityMemberEntity),
    inject:['TypeORMInstance']
}