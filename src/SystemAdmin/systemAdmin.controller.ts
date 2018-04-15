import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import {CreateSystemAdminDto} from "./DTO/create-SystemAdmin.dto";
import {SystemAdminService} from "./systemAdmin.service";

@Controller('systemAdmin')
export class SystemAdminController{
    constructor(
        private systemAdminService: SystemAdminService
    ){}

    @Get()
    public async getAllSystemAdmin(){
        const msg = await this.systemAdminService.getAllSystemAdmin();
        return msg;
    }

    @Post()
    public async addSystemAdmin(@Body() systemAdmin:CreateSystemAdminDto){
        const msg = await this.systemAdminService.addSystemAdmin(systemAdmin);
        return msg;
    }

    @Get(':id')
    public async getSystemAdmin(@Param() params){
        const msg = await this.systemAdminService.getSystemAdmin(params.id);
        return msg;
    }

    @Patch(':id')
    public async updateSystemAdmin(@Body() newSystemAdmin:CreateSystemAdminDto,@Param() params){
        const msg = await this.systemAdminService.updateSystemAdmin(params.id,newSystemAdmin);
        return msg;
    }

    @Delete(':id')
    public async deleteSystemAdmin(@Param() params){
        const msg = await this.systemAdminService.deleteSystemAdmin(params.id);
        return msg;
    }
}
