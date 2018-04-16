import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import { CreateDemographicDto} from "./DTO/create-Demographic.dto";
import {DemographicService} from "./demographic.service";

@Controller('demographic')
export class DemographicController{
    constructor(
        private demographicService : DemographicService
    ){}

    @Get()
    public async getAllDemographic(){
        const msg = await this.demographicService.getAllDemographic();
        return msg;
    }

    @Get(':id')
    public async getDemographic(@Param() params){
        const msg = await this.demographicService.getDemographic(params.id);
        return msg;
    }

    @Post()
    public async addDemographic(@Body() demographic:CreateDemographicDto){
        const msg = await this.demographicService.addDemographic(demographic);
        return msg;
    }

    @Patch(':id')
    public async updateDemographic(@Param() params,@Body() newDemographic: CreateDemographicDto){
        const msg = await this.demographicService.updateDemographic(params.id,newDemographic);
        return msg;
    }

    @Delete(':id')
    public async deleteDemographic(@Param() params){
        const msg = await this.demographicService.deleteDemographic(params.id);
        return msg;
    }
}
