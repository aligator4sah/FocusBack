import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import { CreateStateAdminDto} from "./DTO/create-StateAdmin.dto";
import {StateAdminService} from "./stateAdmin.service";

@Controller('stateAdmin')
export class StateAdminController {
    constructor(
        private stateAdminService:StateAdminService
    ){}

    @Get()
    public async getAllStateAdmin(){
        const msg = await this.stateAdminService.getAllStateAdmin();
        return msg;
    }

    @Get(':id')
    public async getStateAdmin(@Param() params){
        const msg = await this.stateAdminService.getStateAdmin(params.id);
        return msg;
    }

    @Post()
    public async addStateAdmin(@Body() stateAdmin:CreateStateAdminDto){
        const msg = await this.stateAdminService.addStateAdmin(stateAdmin);
    }

    @Patch(':id')
    public async updateStateAdmin(@Param() params,@Body() newStateAdmin:CreateStateAdminDto){
        const msg = await this.stateAdminService.updateStateAdmin(params.id,newStateAdmin);
        return msg;
    }

    @Delete(':id')
    public async deleteStateAdmin(@Param() params){
        const msg = await this.stateAdminService.deleteStateAdmin(params.id);
        return msg;
    }
}