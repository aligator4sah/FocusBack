import { IStateAdmin} from "./IStateAdmin";
import { StateAdminEntity} from "../stateAdmin.entity";

export interface IStateAdminService {
    getAllStateAdmin():Promise<Array<StateAdminEntity>>;
    getStateAdmin(id:number):Promise<StateAdminEntity | null>;
    addStateAdmin(stateAdmin:IStateAdmin):Promise<StateAdminEntity>;
    updateStateAdmin(id:number,newStateAdmin: IStateAdmin): Promise<StateAdminEntity | null>;
    deleteStateAdmin(id:number):Promise<string>;
}