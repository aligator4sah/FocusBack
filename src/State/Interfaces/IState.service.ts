import { IState} from "./IState";
import { StateEntity} from "../state.entity";

export interface IStateService {
    getAllState():Promise<Array<StateEntity>>;
    getState(id:number):Promise<StateEntity | null>;
    addState(state:IState):Promise<StateEntity>;
    updateState(id:number,newState:IState):Promise<StateEntity>;
    deleteState(id:number):Promise<string>;
}