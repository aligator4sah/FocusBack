import {ISubDomain} from "./ISubDomain";
import {SubDomainEntity} from "../subDomain.entity";

export interface ISubDomainService {
    getAllSubDomain():Promise<Array<SubDomainEntity>>;
    getSubDomain(id:number):Promise<SubDomainEntity|null>;
    addSubDomain(domainId:number,subDomain:ISubDomain):Promise<SubDomainEntity>
    updateSubDomain(id:number,newSubDomain:ISubDomain):Promise<SubDomainEntity|null>;
    deleteSubDomain(id:number):Promise<string>;
    getAllSubDomainByDomain(domainId:number):Promise<Array<SubDomainEntity>>;
    getAllSubDomainIsolated():Promise<Array<SubDomainEntity>>;
    isolateSubDomain(subDomainId:number);
}