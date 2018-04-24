import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import {CreateSubDomainDto} from "./DTO/Create-SubDomain.dto";
import {SubDomainService} from "./subDomain.service";

@Controller()
export class SubDomainController {
    constructor(
        private subDomainService:SubDomainService
    ){}

    @Get('subDomain')
    public async getAllSubDomain(){
        const msg = await this.subDomainService.getAllSubDomain();
        return msg;
    }
    //
    @Get('subDomain/:id')
    public async getAllSubDomainByDomainID(@Param() params){
        const msg = await this.subDomainService.getAllSubDomainByDomain(params.id);
        return msg;
    }

    @Patch('subDomain/:id')
    public async addSubDomain(@Param() params,@Body() subDomain:CreateSubDomainDto){
        const msg = await this.subDomainService.addSubDomain(params.id,subDomain);
        return msg;
    }

    @Patch('subDomain/update/:id')
    public async updateSubDomain(@Param() params,@Body() newSubDomain:CreateSubDomainDto){
        const msg = await this.subDomainService.updateSubDomain(params.id,newSubDomain);
        return msg;
    }

    @Delete('subDomain/:id')
    public async deleteSubDomain(@Param() params){
        const msg = await this.subDomainService.deleteSubDomain(params.id);
        return msg;
    }

    @Delete('subDomain/isolate/:id')
    public async isolateSubDomain(@Param() params){
        const msg = await this.subDomainService.isolateSubDomain(params.id);
        return msg;
    }

    @Get('isolatedSubDomain')
    public async getAllSubDomainIsolated(){
        const msg = await this.subDomainService.getAllSubDomainIsolated();
        return msg;
    }
}