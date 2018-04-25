import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import {CreateBhcoDto} from "./DTO/create-Bhco.dto";
import {BhcoService} from "./bhco.service";

@Controller()
export class BhcoController{
    constructor(
        private bhcoService: BhcoService
    ){}

    @Get('bhco')
    public async getAllBhco(){
        const msg = await this.bhcoService.getAllBhco();
        return msg;
    }

    @Get('Bhco/Community/:id')
    public async getAllBhcoByCommunity(@Param() params){
        const msg = await this.bhcoService.getAllBhcoByCommunity(params.id);
        return msg;
    }

    @Get('Bhco/State/:id')
    public async getAllBhcoByState(@Param() params){
        const msg = await this.bhcoService.getAllBhcoByState(params.id);
        return msg;
    }

    @Post('bhco')
    public async addBhco(@Body() bhco: CreateBhcoDto){
        const msg = await this.bhcoService.addBhco(bhco);
        return msg;
    }

    @Get('bhco/:id')
    public async getBhco(@Param() params){
       const msg =await this.bhcoService.getBhco(params.id);
       return msg;
    }

    @Patch('bhco/:id')
    public async updateBhco(@Param() params,@Body() newBhco: CreateBhcoDto){
        const msg = await  this.bhcoService.updateBhco(params.id,newBhco);
        return msg;
    }

    @Delete('bhco:id')
    public async deleteBhco(@Param() params){
        const msg = await this.bhcoService.deleteBhco(params.id);
        return msg;
    }


}