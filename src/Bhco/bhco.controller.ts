import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import {CreateBhcoDto} from "./DTO/create-Bhco.dto";
import {BhcoService} from "./bhco.service";

@Controller('bhco')
export class BhcoController{
    constructor(
        private bhcoService: BhcoService
    ){}

    @Get()
    public async getAllBhco(){
        const msg = await this.bhcoService.getAllBhco();
        return msg;
    }

    @Post()
    public async addBhco(@Body() bhco: CreateBhcoDto){
        const msg = await this.bhcoService.addBhco(bhco);
        return msg;
    }

    @Get(':id')
    public async getBhco(@Param() params){
       const msg =await this.bhcoService.getBhco(params.id);
       return msg;
    }

    @Patch(':id')
    public async updateBhco(@Param() params,@Body() newBhco: CreateBhcoDto){
        const msg = await  this.bhcoService.updateBhco(params.id,newBhco);
        return msg;
    }

    @Delete(':id')
    public async deleteBhco(@Param() params){
        const msg = await this.bhcoService.deleteBhco(params.id);
        return msg;
    }


}