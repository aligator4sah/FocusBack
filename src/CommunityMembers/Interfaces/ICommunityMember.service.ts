import {ICommunityMember} from "./ICommunityMember";
import { CommunityMemberEntity} from "../communityMember.entity";

export interface ICommunityMemberService {
    getAllCommunityMember():Promise<Array<CommunityMemberEntity>>;
    getCommunityMember(id: number): Promise<CommunityMemberEntity | null>;
    addCommunityMember(communityMember: ICommunityMember): Promise<CommunityMemberEntity>;
    updateCommunityMember(id: number, newCommunityMember: ICommunityMember): Promise<CommunityMemberEntity | null>;
    deleteCommunityMember(id:number): Promise<string>;
    getUnAssignedCommunityMember():Promise<Array<CommunityMemberEntity>>;
    getAssignedCommunityMember():Promise<Array<CommunityMemberEntity>>;
    assignCommunityMember(communityMemberID:number,bhcoInfo:any):Promise<Array<CommunityMemberEntity>>;
    unAssignCommunityMember(communityMemberID:number):Promise<Array<CommunityMemberEntity>>;
}