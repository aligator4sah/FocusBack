import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import { FamilyService} from "./family.service";
import { CreateFamilyDto} from "./DTO/create-Family.dto";

@Controller('family')
export class FamilyController {
    constructor(
        private familyService:FamilyService
    ){}

    @Get()
    public async getAllFamily(){
        const msg = await this.familyService.getAllFamily();
        return msg;
    }

    @Get(':id')
    public async getFamily(@Param() params){
        const msg = await this.familyService.getFamily(params.id);
        return msg;
    }

    @Post()
    public async addFamily(@Body() family:CreateFamilyDto){
        const msg = await this.familyService.addFamily(family);
        return msg;
    }

    @Patch(':id')
    public async updateFamily(@Param() params,@Body() newFamily:CreateFamilyDto){
        const msg = await this.familyService.updateFamily(params.id,newFamily);
        return msg;
    }

    @Delete(':id')
    public async deleteFamily(@Param() params){
        const msg = await this.familyService.deleteFamily(params.id);
        return msg;
    }

    @Get('/block/:id')
    public async getFamilyByBlock(@Param() params){
        const msg = await this.familyService.getFamilyByBlock(params.id);
        return msg;
    }
}