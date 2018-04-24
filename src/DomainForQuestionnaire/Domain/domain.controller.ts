import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import {DomainService} from "./domain.service";
import {CreateDomainDto} from "./DTO/Create-Domain.dto";

@Controller('domain')
export class DomainController {
    constructor(
        private domainService:DomainService
    ){}

    @Get()
    public async getAllDomain(){
        const msg = await this.domainService.getAllDomain();
        return msg;
    }

    @Get(':id')
    public async getDomain(@Param() params){
        const msg = await this.domainService.getDomain(params.id);
        return msg;
    }

    @Post()
    public async addDomain(@Body() domain:CreateDomainDto){
        const msg = await this.domainService.addDomain(domain);
        return msg;
    }

    @Patch(':id')
    public async updateDomain(@Param() params,@Body() newDomain:CreateDomainDto){
        const msg = await this.domainService.updateDomain(params.id,newDomain);
        return msg;
    }

    @Delete(':id')
    public async deleteDomain(@Param() params){
        const msg = await this.domainService.deleteDomain(params.id);
        return msg;
    }
}