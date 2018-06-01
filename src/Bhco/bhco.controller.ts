import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import {CreateBhcoDto} from "./DTO/create-Bhco.dto";
import {BhcoService} from "./bhco.service";

@Controller()
export class BhcoController{
    constructor(
        private bhcoService: BhcoService
    ){}

    @Get('bhco')
    public async getAllBhco(){
        const msg = await this.bhcoService.getAllBhco();
        return msg;
    }

    @Get('Bhco/Community/:id')
    public async getAllBhcoByCommunity(@Param() params){
        const msg = await this.bhcoService.getAllBhcoByCommunity(params.id);
        return msg;
    }

    @Get('Bhco/State/:id')
    public async getAllBhcoByState(@Param() params){
        const msg = await this.bhcoService.getAllBhcoByState(params.id);
        return msg;
    }

    @Post('bhco')
    public async addBhco(@Body() bhco: CreateBhcoDto){
        const msg = await this.bhcoService.addBhco(bhco);
        return msg;
    }

    @Get('bhco/:id')
    public async getBhco(@Param() params){
       const msg =await this.bhcoService.getBhco(params.id);
       return msg;
    }

    @Patch('bhco/:id')
    public async updateBhco(@Param() params,@Body() newBhco: CreateBhcoDto){
        const msg = await  this.bhcoService.updateBhco(params.id,newBhco);
        return msg;
    }

    @Delete('bhco:id')
    public async deleteBhco(@Param() params){
        const msg = await this.bhcoService.deleteBhco(params.id);
        return msg;
    }

    @Get('communityMemberInBhco/:id')
    public async countCommunityMemberInBhco(@Param() params){
        const msg = await this.bhcoService.countCommunityMemberInCurrentBhco(params.id);
        return msg;
    }

  @Get('communityMemberByGenderInBhco/:id')
  public async countCommunityMemberByGenderInBhco(@Param() params){
    const msg = await this.bhcoService.countCommunityMemberByGenderInCurrentBhco(params.id);
    return msg;
  }

  @Get('communityMemberByRaceInBhco/:id')
  public async countCommunityMemberByRaceInBhco(@Param() params){
    const msg = await this.bhcoService.countCommunityMemberByRaceInCurrentBhco(params.id);
    return msg;
  }

  @Get('communityMemberByMarryInBhco/:id')
  public async countCommunityMemberByMarryInBhco(@Param() params){
    const msg = await this.bhcoService.countCommunityMemberByMarryInCurrentBhco(params.id);
    return msg;
  }

  @Get('communityMemberByEducationInBhco/:id')
  public async countCommunityMemberByEducationInBhco(@Param() params){
    const msg = await this.bhcoService.countCommunityMemberByEducationInCurrentBhco(params.id);
    return msg;
  }

  @Get('communityMemberByEmploymentsInBhco/:id')
  public async countCommunityMemberByEmploymentsInBhco(@Param() params){
    const msg = await this.bhcoService.countCommunityMemberByEmploymentsInCurrentBhco(params.id);
    return msg;
  }

  @Get('communityMemberByAgeDistributionInBhco/:id')
  public async countCommunityMemberByAgeDistributionInBhco(@Param() params){
    const msg = await this.bhcoService.countCommunityMemberByAgeInCurrentBhco(params.id);
    return msg;
  }
}