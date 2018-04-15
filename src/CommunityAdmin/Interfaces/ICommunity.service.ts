import {ICommunityAdmin} from "./ICommunityAdmin";
import {CommunityAdminEntity} from "../communityAdmin.entity";

export interface ICommunityService {
    getAllCommunityAdmin():Promise<Array<CommunityAdminEntity>>;
    getCommunityAdmin(id:number):Promise<CommunityAdminEntity | null>;
    addCommunityAdmin(communityAdmin:ICommunityAdmin): Promise<CommunityAdminEntity>;
    updateCommunityAdmin(id:number,newCommunityAdmin:ICommunityAdmin): Promise<CommunityAdminEntity | null>;
    deleteCommunityAdmin(id:number):Promise<string>;
}