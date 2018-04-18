import { Component ,Inject} from "@nestjs/common";
import { Repository } from 'typeorm';
import {BhcoEntity} from "./bhco.entity";
import {IBcho,IBhcoService} from "./Interfaces";
// import {CreateBhcoDto} from "./DTO/create-Bhco.dto";

@Component()
export class BhcoService implements IBhcoService{
    constructor(
        @Inject('BhcoRepository') private readonly bhcoRepository: Repository<BhcoEntity>
    ){}

    public async getAllBhco():Promise<Array<BhcoEntity>>{
        return await this.bhcoRepository.find();
    }

    public async getBhco(id:number):Promise<BhcoEntity|null>{
        return await this.bhcoRepository.findOneById(id);
    }

    public async addBhco(bhco: IBcho): Promise<BhcoEntity>{
        return await this.bhcoRepository.save(bhco);
    }

    public async updateBhco(id:number,newBhco:IBcho): Promise<BhcoEntity|null>{
        const bhco = await this.bhcoRepository.findOneById(id);
        if(!bhco.id){
            console.log("bhco does not exist");
        }
        await this.bhcoRepository.updateById(id,newBhco);
        return await this.bhcoRepository.findOneById(id);
    }

    public async deleteBhco(id:number): Promise<string>{
        await this.bhcoRepository.deleteById(id);
        let bhco = await this.bhcoRepository.findOneById(id);
        if(!bhco){
            return 'delete success';
        }else{
            return 'delete fail';
        }
    }
}