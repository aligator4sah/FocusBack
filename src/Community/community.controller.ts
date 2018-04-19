import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import {CommunityService} from "./community.service";
import {CreateCommunityDto} from "./DTO/create-Community.dto";

@Controller('community')
export class CommunityController {
    constructor(
        private communityService: CommunityService
    ){}

    @Get()
    public async getAllCommunity(){
        const msg = await this.communityService.getAllCommunity();
        return msg;
    }

    @Get(':id')
    public async getCommunity(@Param() params){
        const msg = await this.communityService.getCommunity(params.id);
        return msg;
    }

    @Post()
    public async addCommunity(@Body() community:CreateCommunityDto){
        const msg = await this.communityService.addCommunity(community);
        return msg;
    }

    @Patch(':id')
    public async updateCommunity(@Param() params,@Body() newCommunity:CreateCommunityDto){
        const msg = await this.communityService.updateCommunity(params.id,newCommunity);
        return msg;
    }

    @Delete(':id')
    public async deleteCommunity(@Param() params){
        const msg = await this.communityService.deleteCommunity(params.id);
        return msg;
    }

    @Get('/city/:id')
    public async getCommunityByCity(@Param() params){
        const msg = await this.communityService.getCommunityByCity(params.id);
        return msg;
    }
}