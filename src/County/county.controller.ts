import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import { CreateCountyDto} from "./DTO/create-County.dto";
import {CountyService} from "./county.service";

@Controller('county')
export class CountyController {
    constructor(
        private countyService: CountyService
    ){}

    @Get()
    public async getAllCounty(){
        const msg = await this.countyService.getAllCounty();
        return msg;
    }

    @Get(':id')
    public async getCounty(@Param() params){
        const msg = await this.countyService.getCounty(params.id);
        return msg;
    }

    @Post()
    public async addCounty(@Body() county:CreateCountyDto){
        const msg = await this.countyService.addCounty(county);
        return msg;
    }

    @Patch(':id')
    public async updateCounty(@Param() params,@Body() newCounty:CreateCountyDto){
        const msg = await this.countyService.updateCounty(params.id,newCounty);
        return msg;
    }

    @Delete(':id')
    public async deleteCounty(@Param() params){
        const msg = await this.countyService.deleteCounty(params.id);
        return msg;
    }

    @Get('/state/:id')
    public async getCountyByState(@Param() params){
        const msg = await this.countyService.getCountyByState(params.id);
        return msg;
    }
}