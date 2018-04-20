import {IUserDemographic} from "./IUserDemographic";
import {UserDemographicEntity} from "../userDemographic.entity";

export interface IUserDemographicService {
    getAllUserDemographic():Promise<Array<UserDemographicEntity>>;
    getUserDemographic(id:number):Promise<UserDemographicEntity|null>;
    addUserDemographic(userDemographic:IUserDemographic):Promise<UserDemographicEntity>;
    updateUserDemographic(id:number,newUserDemographic:IUserDemographic):Promise<UserDemographicEntity|null>;
    deleteUserDemographic(id:number):Promise<string>;
}