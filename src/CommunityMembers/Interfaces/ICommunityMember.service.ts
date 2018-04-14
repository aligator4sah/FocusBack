import {ICommunityMember} from "./ICommunityMember";
import {CreateCMemberDto} from "../DTO/create-CMember.dto";

export interface ICommunityMemberService {
    getAllCommunityMember():Promise<[ICommunityMember[] ,number]>;
    getCommunityMember(id: number): Promise<ICommunityMember | null>;
    addCommunityMember(communityMember: CreateCMemberDto): Promise<ICommunityMember>;
    updateCommunityMember(id: number, newCommunityMember: CreateCMemberDto): Promise<ICommunityMember | null>;
}