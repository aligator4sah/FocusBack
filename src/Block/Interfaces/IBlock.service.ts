import {IBlock} from "./IBlock";
import {BlockEntity} from "../block.entity";

export interface IBlockService {
    getAllBlock():Promise<Array<BlockEntity>>;
    getBlock(id:number):Promise<BlockEntity|null>;
    addBlock(block:IBlock):Promise<BlockEntity>;
    updateBlock(id:number,newBlock:IBlock):Promise<BlockEntity|null>;
    deleteBlock(id:number):Promise<string>;
    getBlockByCommunity(id:number):Promise<Array<BlockEntity>>;
}