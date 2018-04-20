import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import {CreateUserDemographicDto} from "./DTO/create-UserDemographic.dto";
import {UserDemographicService} from "./userDemographic.service";

@Controller('userDemographic')
export class UserDemographicController{
    constructor(
        private userDemographicService: UserDemographicService
    ){}

    @Get()
    public async getAllUserDemographic(){
        const msg = await this.userDemographicService.getAllUserDemographic();
        return msg;
    }

    @Get(':id')
    public async getUserDemographic(@Param() params){
        const msg = await this.userDemographicService.getUserDemographic(params.id);
        return msg;
    }

    @Post()
    public async addUserDemographic(@Body() demographic:CreateUserDemographicDto){
        const msg = await this.userDemographicService.addUserDemographic(demographic);
        return msg;
    }

    @Patch(':id')
    public async updateUserDemographic(@Param() params,@Body() newDemographic:CreateUserDemographicDto){
        const msg = await this.userDemographicService.updateUserDemographic(params.id,newDemographic);
        return msg;
    }

    @Delete(':id')
    public async deleteUserDemographic(@Param() params){
        const msg = await this.userDemographicService.deleteUserDemographic(params.id);
        return msg;
    }
}