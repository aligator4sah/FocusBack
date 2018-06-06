import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import {CreateSystemAdminDto} from "./DTO/create-SystemAdmin.dto";
import {SystemAdminService} from "./systemAdmin.service";
// import { Roles} from '../shared/Guards/roles.decorator';
// import{ UseGuards } from '@nestjs/common';
// import { RolesGuard } from '../Shared/Guards/roles.guard';

@Controller('systemAdmin')
// @UseGuards(RolesGuard)
export class SystemAdminController{
    constructor(
        private systemAdminService: SystemAdminService
    ){}

    @Get()
    // @Roles('systemAdmin')
    public async getAllSystemAdmin(){
        const msg = await this.systemAdminService.getAllSystemAdmin();
        return msg;
    }

    @Post()
    // @Roles('systemAdmin')
    public async addSystemAdmin(@Body() systemAdmin:CreateSystemAdminDto){
        const msg = await this.systemAdminService.addSystemAdmin(systemAdmin);
        return msg;
    }

    @Get(':id')
    // @Roles('systemAdmin')
    public async getSystemAdmin(@Param() params){
        const msg = await this.systemAdminService.getSystemAdmin(params.id);
        return msg;
    }

    @Patch(':id')
    // @Roles('systemAdmin')
    public async updateSystemAdmin(@Body() newSystemAdmin:CreateSystemAdminDto,@Param() params){
        const msg = await this.systemAdminService.updateSystemAdmin(params.id,newSystemAdmin);
        return msg;
    }

    @Delete(':id')
    // @Roles('systemAdmin')
    public async deleteSystemAdmin(@Param() params){
        const msg = await this.systemAdminService.deleteSystemAdmin(params.id);
        return msg;
    }

    @Get('communityMemberInSystem/:id')
    public async countCommunityMemberInSystem(@Param() params){
        const msg = await this.systemAdminService.countCommunityMemberInSystem();
        return msg;
    }

  @Get('communityMemberGroupByState/:id')
  public async countCommunityMemberByStateInSystem(@Param() params){
    const msg = await this.systemAdminService.countCommunityMemberGroupByState();
    return msg;
  }

  @Get('communityMemberGroupByCommunity/:id')
  public async  countCommunityMemberByCommunityInSystem(@Param() params) {
        const msg = await this.systemAdminService.countCommunityMemberGroupByCommunity();
        return msg;
  }

    @Get('communityMemberGroupByCity/:id')
    public async  countCommunityMemberByCityInSystem(@Param() params) {
        const msg = await this.systemAdminService.countCommunityMemberGroupByCity();
        return msg;
    }

  @Get('communityMemberGroupByGender/:id')
  public async countCommunityMemberByGenderInSystem(@Param() params){
    const msg = await this.systemAdminService.countCommunityMemberByGenderInSystem();
    return msg;
  }

  @Get('communityMemberGroupByRace/:id')
  public async countCommunityMemberByRaceInSystem(@Param() params){
    const msg = await this.systemAdminService.countCommunityMemberByRaceInSystem();
    return msg;
  }

  @Get('communityMemberGroupByMarry/:id')
  public async countCommunityMemberByMarryInSystem(@Param() params){
    const msg = await this.systemAdminService.countCommunityMemberByMarryInSystem();
    return msg;
  }

  @Get('communityMemberGroupByEducation/:id')
  public async countCommunityMemberByEducationInSystem(@Param() params){
    const msg = await this.systemAdminService.countCommunityMemberByEducationInSystem();
    return msg;
  }

  @Get('communityMemberGroupByEmployments/:id')
  public async countCommunityMemberByEmploymentsInSystem(@Param() params){
    const msg = await this.systemAdminService.countCommunityMemberByEmploymentsInSystem();
    return msg;
  }

  @Get('communityMemberGroupByAge/:id')
  public async countCommunityMemberByAgeInSystem(@Param() params){
    const msg = await this.systemAdminService.countCommunityMemberByAgeInSystem();
    return msg;
  }

  @Get('bhcoInSystem/:id')
  public async countBhcoInSystem(@Param() params){
      const msg = await this.systemAdminService.countBhcoInSystem();
      return msg;
  }
}

