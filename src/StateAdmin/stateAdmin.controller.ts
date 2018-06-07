import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import { CreateStateAdminDto} from "./DTO/create-StateAdmin.dto";
import {StateAdminService} from "./stateAdmin.service";
// import { Roles} from '../shared/Guards/roles.decorator';
// import{ UseGuards } from '@nestjs/common';
// import { RolesGuard } from '../Shared/Guards/roles.guard';


@Controller('stateAdmin')
// @UseGuards(RolesGuard)
export class StateAdminController {
    constructor(
        private stateAdminService:StateAdminService
    ){}

    @Get()
    // @Roles('systemAdmin','stateAdmin')
    public async getAllStateAdmin(){
        const msg = await this.stateAdminService.getAllStateAdmin();
        return msg;
    }

    @Get(':id')
    // @Roles('systemAdmin','stateAdmin')
    public async getStateAdmin(@Param() params){
        const msg = await this.stateAdminService.getStateAdmin(params.id);
        return msg;
    }

    @Post()
    // @Roles('systemAdmin','stateAdmin')
    public async addStateAdmin(@Body() stateAdmin:CreateStateAdminDto){
        const msg = await this.stateAdminService.addStateAdmin(stateAdmin);
    }

    @Patch(':id')
    // @Roles('systemAdmin','stateAdmin')
    public async updateStateAdmin(@Param() params,@Body() newStateAdmin:CreateStateAdminDto){
        const msg = await this.stateAdminService.updateStateAdmin(params.id,newStateAdmin);
        return msg;
    }

    @Delete(':id')
    // @Roles('systemAdmin','stateAdmin')
    public async deleteStateAdmin(@Param() params){
        const msg = await this.stateAdminService.deleteStateAdmin(params.id);
        return msg;
    }

    @Get('communityMemberInState/:id')
    public async countCommunityMemberInState(@Param() params){
        const msg = await this.stateAdminService.countCommunityMemberInCurrentState(params.id);
        return msg;
    }

    @Get('bhcoInState/:id')
    public async countBhcoInState(@Param() params) {
      const msg = await this.stateAdminService.countBhcoGroupInCurrentState(params.id);
      return msg;
    }

    @Get('communityMemberByCityInState/:id')
    public async countCommunityByCityInState(@Param() params){
        const msg = await this.stateAdminService.countCommunityMemberGroupByCityInCurrentState(params.id);
        return msg;
    }

    @Get('communityMemberByCountyInState/:id')
    public async countCommunityByCountyInState(@Param() params){
        const msg = await this.stateAdminService.countCommunityMemberGroupByCountyInCurrentState(params.id);
        return msg;
    }

    @Get('communityMemberByCommunityInState/:id')
    public async countCommunityByCommunityInState(@Param() params){
      const msg = await this.stateAdminService.countCommunityMemberGroupByCommunityInCurrentState(params.id);
      return msg;
    }


  @Get('communityMemberByGenderInState/:id')
  public async countCommunityByGenderInState(@Param() params){
    const msg = await this.stateAdminService.countCommunityMemberByGenderInCurrentState(params.id);
    return msg;
  }

  @Get('communityMemberByRaceInState/:id')
  public async countCommunityByRaceInState(@Param() params){
    const msg = await this.stateAdminService.countCommunityMemberByRaceInCurrentState(params.id);
    return msg;
  }

  @Get('communityMemberByMarryInState/:id')
  public async countCommunityByMarryInState(@Param() params){
    const msg = await this.stateAdminService.countCommunityMemberByMarryInCurrentState(params.id);
    return msg;
  }

  @Get('communityMemberByEducationInState/:id')
  public async countCommunityByEducationInState(@Param() params){
    const msg = await this.stateAdminService.countCommunityMemberByEducationInCurrentState(params.id);
    return msg;
  }

  @Get('communityMemberByEmploymentsInState/:id')
  public async countCommunityByEmploymentsInState(@Param() params){
    const msg = await this.stateAdminService.countCommunityMemberByEmploymentsInCurrentState(params.id);
    return msg;
  }

  @Get('communityMemberByAgeDistributionInState/:id')
  public async countCommunityByAgeDistributionInState(@Param() params){
    const msg = await this.stateAdminService.countCommunityMemberByAgeInCurrentState(params.id);
    return msg;
  }

}