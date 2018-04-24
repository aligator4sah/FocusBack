import { FamilyEntity} from "../family.entity";
import { IFamily} from "./IFamily";

export interface IFamilyService {
    getAllFamily():Promise<Array<FamilyEntity>>;
    getFamily(id:number):Promise<FamilyEntity|null>;
    addFamily(family:IFamily):Promise<FamilyEntity>;
    updateFamily(id:number,newFamily:IFamily):Promise<FamilyEntity|null>;
    deleteFamily(id:number):Promise<string>;
    getFamilyByBlock(id:number):Promise<Array<FamilyEntity>>;
}