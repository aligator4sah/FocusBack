import { Component ,Inject} from "@nestjs/common";
import { Repository } from 'typeorm';
import { ICommunityAdmin,ICommunityService} from "./Interfaces";
import { CommunityAdminEntity} from "./communityAdmin.entity";

@Component()
export class CommunityAdminService implements ICommunityService{
    constructor(
        @Inject('CommunityAdminRepository') private readonly communityAdminRepository: Repository<CommunityAdminEntity>
    ){}

    public async getAllCommunityAdmin():Promise<Array<CommunityAdminEntity>>{
        return await this.communityAdminRepository.find();
    }

    public async getCommunityAdmin(id:number):Promise<CommunityAdminEntity | null>{
        return await this.communityAdminRepository.findOneById(id);
    }

    public async addCommunityAdmin(communityAdmin:ICommunityAdmin): Promise<CommunityAdminEntity>{
        return await this.communityAdminRepository.save(communityAdmin);
    }

    public async updateCommunityAdmin(id:number,newCommunityAdmin:ICommunityAdmin): Promise<CommunityAdminEntity | null>{
        const communityAdmin = await this.communityAdminRepository.findOneById(id);
        if(!communityAdmin){
            console.log('community admin does not exist');
        }
        await this.communityAdminRepository.updateById(id,newCommunityAdmin);
        return this.communityAdminRepository.findOneById(id);

    }

    public async deleteCommunityAdmin(id:number):Promise<string>{
        await this.communityAdminRepository.deleteById(id);
        const communityAdmin = await this.communityAdminRepository.findOneById(id);
        if(!communityAdmin){
            return 'delete success';
        }else{
            return 'delete fail';
        }
    }
}