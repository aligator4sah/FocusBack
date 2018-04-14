import {ICommunityMember} from "./ICommunityMember";
import { CommunityMemberEntity} from "../communityMember.entity";

export interface ICommunityMemberService {
    getAllCommunityMember():Promise<Array<CommunityMemberEntity>>;
    getCommunityMember(id: number): Promise<CommunityMemberEntity | null>;
    addCommunityMember(communityMember: ICommunityMember): Promise<CommunityMemberEntity>;
    updateCommunityMember(id: number, newCommunityMember: ICommunityMember): Promise<CommunityMemberEntity | null>;
}