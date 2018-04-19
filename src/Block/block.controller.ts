import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import { CreateBlockDto} from "./DTO/create-Block.dto";
import {BlockService} from "./block.service";

@Controller('block')
export class BlockController {
    constructor(
        private blockService: BlockService
    ){}

    @Get()
    public async getAllBlock(){
        const msg = await this.blockService.getAllBlock();
        return msg;
    }

    @Get(':id')
    public async getBlock(@Param() params){
        const msg = await this.blockService.getBlock(params.id);
        return msg;
    }

    @Post()
    public async addBlock(@Body() block:CreateBlockDto){
        const msg = await this.blockService.addBlock(block);
        return msg;
    }

    @Patch(':id')
    public async updateBlock(@Param() params,@Body() newBlock: CreateBlockDto){
        const msg = await this.blockService.updateBlock(params.id,newBlock);
        return msg;
    }

    @Delete(':id')
    public async deleteBlock(@Param() params){
        const msg = await this.blockService.deleteBlock(params.id);
        return msg;
    }

    @Get('community/:id')
    public async getBlockByCommunity(@Param() params){
        const msg = await this.blockService.getBlockByCommunity(params.id);
        return msg;
    }
}