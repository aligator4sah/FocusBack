import { Component ,Inject} from "@nestjs/common";
import {Repository, getRepository, getConnection} from 'typeorm';
import {ISubDomain,ISubDomainService} from "./Interfaces";
import {SubDomainEntity} from "./subDomain.entity";
import {DomainEntity} from "../Domain/domain.entity";

@Component()
export class SubDomainService implements ISubDomainService{
    constructor(
        @Inject('SubDomainRepository') private readonly subDomainRepository:Repository<SubDomainEntity>
    ){}
    //get All SubDomain by Domain
    public async getAllSubDomainByDomain(domainId:number):Promise<Array<SubDomainEntity>>{
        const selectedDomain = await getRepository(DomainEntity).createQueryBuilder('domain')
            .leftJoinAndSelect("domain.subdomain","subdomain")
            .where("domain.id = :id",{id:domainId})
            .getOne();
        return await selectedDomain.subdomain;
    }

    public async getAllSubDomainIsolated():Promise<Array<SubDomainEntity>>{
        const isolatedSubDomains = await this.subDomainRepository.find({isolate:true});
        return isolatedSubDomains;
    }

    public async getAllSubDomain():Promise<Array<SubDomainEntity>>{
        return await this.subDomainRepository.find();
    }

    public async getSubDomain(id:number) :Promise<SubDomainEntity|null>{
        return await this.subDomainRepository.findOneById(id);
    }

    public async addSubDomain(domainId:number,subDomain:ISubDomain):Promise<SubDomainEntity>{
        //set the sub domain first then set domain attribute to sub domain
       const selectedSubDomain = await this.subDomainRepository.save(subDomain);
       await getConnection().createQueryBuilder().relation(SubDomainEntity,"domain").of(selectedSubDomain.id).set(domainId);
       return await this.subDomainRepository.findOneById(selectedSubDomain.id);
    }

    public async updateSubDomain(domainId:number,newSubDomain:ISubDomain):Promise<SubDomainEntity|null>{
        //need the original sub domain id
        const selectedSubDomain = await this.subDomainRepository.findOneById(newSubDomain.id);
        await this.subDomainRepository.updateById(selectedSubDomain.id,newSubDomain);
        await getConnection().createQueryBuilder().relation(SubDomainEntity,"domain").of(selectedSubDomain.id).set(domainId);
        await getConnection().createQueryBuilder().update(SubDomainEntity).set({isolate:false}).where("id = :id",{id:newSubDomain.id}).execute();
        return await this.subDomainRepository.findOneById(selectedSubDomain.id);
    }

    public async deleteSubDomain(id:number):Promise<string>{
        await this.subDomainRepository.deleteById(id);
        const subDomain = await this.subDomainRepository.findOneById(id);
        if(subDomain){
            return 'delete fail';
        }else {
            return 'delete success';
        }
    }
    //hide sub domain
    public async isolateSubDomain(subDomainId:number) {
        await getConnection().createQueryBuilder().relation(SubDomainEntity,"domain").of(subDomainId).set(null);
        await getConnection().createQueryBuilder().update(SubDomainEntity).set({isolate:true}).where("id = :id",{id:subDomainId}).execute();
    }
}