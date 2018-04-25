import {ICommunityMember} from "./ICommunityMember";
import { CommunityMemberEntity} from "../communityMember.entity";

export interface ICommunityMemberService {
    getAllCommunityMember():Promise<Array<CommunityMemberEntity>>;
    getCommunityMember(id: number): Promise<CommunityMemberEntity | null>;
    addCommunityMember(communityMember: ICommunityMember);
    updateCommunityMember(id: number, newCommunityMember: ICommunityMember): Promise<CommunityMemberEntity | null>;
    deleteCommunityMember(id:number): Promise<string>;
    getUnAssignedCommunityMember(communityId:number):Promise<Array<CommunityMemberEntity>>
    getAssignedCommunityMember(communityId:number):Promise<Array<CommunityMemberEntity>>;
    assignCommunityMember(bhcoID:number,communityMemberIDs:any);
    unAssignCommunityMember(communityMemberID:number);
}