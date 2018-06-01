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
        const msg = await this.communityAdminService.getAllCommunityAdmin();
        return msg;
    }

    @Get(':id')
    public async getCommunityAdmin(@Param() params){
        const msg = await this.communityAdminService.getCommunityAdmin(params.id);
        return msg;
    }

    @Get('/state/:id')
    public async getCommunityAdminByState(@Param() params){
        const msg = await this.communityAdminService.getCommunityAdminByState(params.id);
        return msg;
    }

    @Post()
    public async addCommunityAdmin(@Body() communityAdmin:CreateCAdminDto){
        const msg = await this.communityAdminService.addCommunityAdmin(communityAdmin);
        return msg;
    }

    @Patch(':id')
    public async updateCommunityAdmin(@Param() params,@Body() newCommunityAdmin:CreateCAdminDto){
        const msg = await this.communityAdminService.updateCommunityAdmin(params.id,newCommunityAdmin);
        return msg;
    }

    @Delete(':id')
    public async deleteCommunityAdmin(@Param() params){
        const msg = await this.communityAdminService.deleteCommunityAdmin(params.id);
        return msg;
    }

    @Get('communityRelatedInfo/:id')
    public async getCommunityRelatedInfo(@Param() params){
        const msg = await this.communityAdminService.getCommunityRelatedInfo(params.id);
        return msg;
    }

    @Get('communityMemberInCommunity/:id')
    public async countCommunityMemberInCurrentCommunity(@Param() params){
        const msg = await this.communityAdminService.countCommunityMemberInCurrentCommunity(params.id);
        return msg;
    }

    @Get('blocksInCurrentCommunity/:id')
    public async countBlockInCurrentCommunity(@Param() params){
        const msg = await this.communityAdminService.countBlockInCurrentCommunity(params.id);
        return msg;
    }

    @Get('familyInCurrentCommunity/:id')
    public async countFamilyInCurrentCommunity(@Param() params){
        const msg = await this.communityAdminService.countFamilyInCurrentCommunity(params.id);
        return msg;
    }

    @Get('communityMemberByGenderInCommunity/:id')
    public async countCommunityMemberByGender(@Param() params){
        const msg = await this.communityAdminService.countCommunityMemberByGenderInCurrentCommunity(params.id);
        return msg;
    }

    @Get('communityMemberByRaceInCommunity/:id')
    public async countCommunityMemberByRace(@Param() params){
        const msg = await this.communityAdminService.countCommunityMemberByRaceInCurrentCommunity(params.id);
        return msg;
    }

    @Get('communityMemberByMarryInCommunity/:id')
    public async countCommunityMemberByMarry(@Param() params){
        const msg = await this.communityAdminService.countCommunityMemberByMarryInCurrentCommunity(params.id);
        return msg;
    }

    @Get('communityMemberByEducationInCommunity/:id')
    public async countCommunityMemberByEducation(@Param() params){
        const msg = await this.communityAdminService.countCommunityMemberByEducationInCurrentCommunity(params.id);
        return msg;
    }

    @Get('communityMemberByEmploymentsInCommunity/:id')
    public async countCommunityMemberByEmployment(@Param() params){
        const msg = await this.communityAdminService.countCommunityMemberByEmploymentsInCurrentCommunity(params.id);
        return msg;
    }

    @Get('communityMemberByAgeDistributionInCommunity/:id')
    public async countCommunityMemberByAgeDistribution(@Param() params){
        const msg = await this.communityAdminService.countCommunityMemberByAgeInCurrentCommunity(params.id);
        return msg;
    }
}