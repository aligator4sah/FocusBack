import { Component ,Inject} from "@nestjs/common";
import {Repository, getRepository, getConnection} from 'typeorm';
import {IDomain,IDomainService} from "./Interfaces";
import {DomainEntity} from "./domain.entity";
import {SubDomainEntity} from "../SubDomain/subDomain.entity";

@Component()
export class DomainService implements IDomainService{
    constructor(
        @Inject('DomainRepository') private readonly domainRepository: Repository<DomainEntity>
    ){}

    public async getAllDomain():Promise<Array<DomainEntity>>{
        return await this.domainRepository.find();
    }

    public async getDomain(id:number):Promise<DomainEntity|null>{
        return await this.domainRepository.findOneById(id);
    }

    public async addDomain(domain:IDomain):Promise<DomainEntity>{
        return await this.domainRepository.save(domain);
    }

    public async updateDomain(id:number,newDomain:IDomain):Promise<DomainEntity|null>{
        const domain = await this.domainRepository.findOneById(id);
        if(!domain){
            console.log("domain does not exist");
        }
        await this.domainRepository.updateById(id,newDomain);
        return await this.domainRepository.findOneById(id);
    }

    //delete sub domain before delete domain
    public async deleteDomain(domainId:number):Promise<string>{
        //find all sub domain under domain and delete them
        const selectedDomain = await getRepository(DomainEntity).createQueryBuilder('domain')
            .leftJoinAndSelect("domain.subdomain","subdomain")
            .where("domain.id = :id",{id:domainId})
            .getOne();
        console.log(selectedDomain.subdomain);
        for(let subDomain of selectedDomain.subdomain){
            await getConnection().createQueryBuilder().delete().from(SubDomainEntity)
                .where("id = :id",{id:subDomain.id}).execute();
        }
        await this.domainRepository.deleteById(domainId);
        const domain = await this.domainRepository.findOneById(domainId);
        if(domain){
            return 'delete fail';
        }else{
            return 'delete success';
        }
    }

}