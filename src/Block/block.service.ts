import { Component ,Inject} from "@nestjs/common";
import { Repository,getRepository } from 'typeorm';
import { BlockEntity} from "./block.entity";
import { IBlock,IBlockService} from "./Interfaces";

@Component()
export class BlockService implements IBlockService{
    constructor(
        @Inject('BlockRepository') private readonly blockRepository:Repository<BlockEntity>
    ){}

    public async getAllBlock():Promise<Array<BlockEntity>>{
        return await this.blockRepository.find();
    }

    public async getBlock(id:number):Promise<BlockEntity|null>{
        return await this.blockRepository.findOneById(id);
    }

    public async addBlock(block:IBlock):Promise<BlockEntity>{
        return await this.blockRepository.save(block);
    }

    public async updateBlock(id:number,newBlock:IBlock):Promise<BlockEntity|null>{
        const block = await this.blockRepository.findOneById(id);
        if(!block){
            console.log('block does not exist');
        }
        await this.blockRepository.updateById(id,newBlock);
        return await this.blockRepository.findOneById(id);
    }

    public async deleteBlock(id:number):Promise<string>{
        await this.blockRepository.deleteById(id);
        const block = await this.blockRepository.findOneById(id);
        if(block){
            return 'delete fail';
        }else{
            return 'delete success';
        }
    }

    public async getBlockByCommunity(id:number):Promise<Array<BlockEntity>>{
        const selectedBlock = getRepository(BlockEntity)
            .createQueryBuilder("block")
            .leftJoinAndSelect("block.community","community")
            .where("community.id = :name",{name:id})
            .getMany();

        return selectedBlock;
    }
}