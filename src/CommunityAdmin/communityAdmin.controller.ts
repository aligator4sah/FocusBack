import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import {CreateCAdminDto} from "./DTO/create-CAdmin.dto";
import {CommunityAdminService} from "./communityAdmin.service";

@Controller('communityAdmin')
export class CommunityAdminController{
    constructor(
        private communityAdminService:CommunityAdminService
    ){}

    @Get()
    public async getAllCommunityAdmin(){
        const msg = this.communityAdminService.getAllCommunityAdmin();
        return msg;
    }

    @Get(':id')
    public async getCommunityAdmin(@Param() params){
        const msg = this.communityAdminService.getCommunityAdmin(params.id);
        return msg;
    }

    @Post()
    public async addCommunityAdmin(@Body() communityAdmin:CreateCAdminDto){
        const msg = this.communityAdminService.addCommunityAdmin(communityAdmin);
        return msg;
    }

    @Patch(':id')
    public async updateCommunityAdmin(@Param() params,@Body() newCommunityAdmin:CreateCAdminDto){
        const msg = this.communityAdminService.updateCommunityAdmin(params.id,newCommunityAdmin);
        return msg;
    }

    @Delete(':id')
    public async deleteCommunityAdmin(@Param() params){
        const msg = this.communityAdminService.deleteCommunityAdmin(params.id);
        return msg;
    }

    @Get('communityRelatedInfo/:id')
    public async getCommunityRelatedInfo(@Param() params){
        const msg = await this.communityAdminService.getCommunityRelatedInfo(params.id);
        return msg;
    }

}