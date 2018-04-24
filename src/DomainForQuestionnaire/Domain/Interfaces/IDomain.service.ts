import {IDomain} from './IDomain'
import { DomainEntity} from "../domain.entity";

export interface IDomainService {
    getAllDomain():Promise<Array<DomainEntity>>;
    getDomain(id:number):Promise<DomainEntity|null>;
    addDomain(domain:IDomain):Promise<DomainEntity>;
    updateDomain(id:number,newDomain:IDomain):Promise<DomainEntity|null>;
    deleteDomain(id:number):Promise<string>;
}