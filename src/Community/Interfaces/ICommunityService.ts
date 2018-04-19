import {ICommunity} from "./ICommunity";
import {CommunityEntity} from "../community.entity";

export interface ICommunityService {
    getAllCommunity():Promise<Array<CommunityEntity>>;
    getCommunity(id:number):Promise<CommunityEntity|null>;
    addCommunity(community: ICommunity):Promise<CommunityEntity>;
    updateCommunity(id:number,newCommunity:ICommunity):Promise<CommunityEntity|null>;
    deleteCommunity(id:number):Promise<string>;
    getCommunityByCity(id:number):Promise<Array<CommunityEntity>>;
}