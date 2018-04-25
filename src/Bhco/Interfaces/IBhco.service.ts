import { IBcho} from "./IBcho";
import { BhcoEntity} from "../bhco.entity";

export interface IBhcoService {
    getAllBhco():Promise<Array<BhcoEntity>>;
    getBhco(id:number):Promise<BhcoEntity|null>;
    addBhco(bhco: IBcho): Promise<IBcho>;
    updateBhco(id:number,newBhco:IBcho): Promise<BhcoEntity|null>;
    deleteBhco(id:number):Promise<string>;
    getAllBhcoByCommunity(communityId:number):Promise<Array<BhcoEntity>>;
    getAllBhcoByState(stateId:number):Promise<Array<BhcoEntity>>;
}