import {ISystemAdmin} from "./ISystemAdmin";
import {SystemAdminEntity} from "../systemAdmin.entity";

export interface ISystemAdminService {
    getAllSystemAdmin():Promise<Array<SystemAdminEntity>>;
    getSystemAdmin(id:number):Promise<SystemAdminEntity | null>;
    addSystemAdmin(systemAdmin:ISystemAdmin):Promise<SystemAdminEntity>;
    updateSystemAdmin(id:number,newSystemAdmin:ISystemAdmin):Promise<SystemAdminEntity|null>;
    deleteSystemAdmin(id:number):Promise<string>;
}