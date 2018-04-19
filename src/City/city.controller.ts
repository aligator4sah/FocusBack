import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import { CreateCityDto} from "./DTO/create-City.dto";
import { CityService} from "./city.service";

@Controller('city')
export class CityController {
    constructor(
        private cityService: CityService
    ){}

    @Get()
    public async getAllCity(){
        const msg =  await this.cityService.getAllCity();
        return msg;
    }

    @Get(':id')
    public async getCity(@Param() params){
        const msg = await this.cityService.getCity(params.id);
        return msg;
    }

    @Post()
    public async addCity(@Body() city:CreateCityDto){
        const msg = await this.cityService.addCity(city);
        return msg;
    }

    @Patch(':id')
    public async updateCity(@Param() params,@Body() newCity:CreateCityDto){
        const msg = await this.cityService.updateCity(params.id,newCity);
        return msg;
    }

    @Delete(':id')
    public async deleteCity(@Param() params){
        const msg = await this.cityService.deleteCity(params.id);
        return msg;
    }

    @Get('/county/:id')
    public async getCityByCounty(@Param() params){
        const msg = await this.cityService.getCityByCounty(params.id);
        return msg;
    }
}