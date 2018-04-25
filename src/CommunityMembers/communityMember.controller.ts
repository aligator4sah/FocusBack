import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import { CreateCMemberDto } from './DTO/create-CMember.dto'
import {CommunityMemberService} from "./communityMember.service";

//ExceptionFilter
// import { HttpExceptionFilter } from '../Shared/ExceptionFilters/http-exception.filter';

//Pipe
// import { ValidationPipe } from '../shared/Pipes/validation.pipe'
// import { ParseIntPipe } from '../shared/Pipes/parse-int.pipe'
//
//Guard
import{ UseGuards } from '@nestjs/common';
import { RolesGuard } from '../Shared/Guards/roles.guard';
import { Roles } from '../shared/Decorators/roles.decorator'

//Interceptor
// import { UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from '../Shared/Interceptors/logging.interceptor';
import { TransformInterceptor} from '../Shared/Interceptors/transform.interceptor';
import { ExceptionInterceptor } from '../shared/Interceptors/exception.interceptor'
//swagger
import { ApiUseTags } from '@nestjs/swagger'


@Controller()
// @UseFilters(new HttpExceptionFilter())
// @UseGuards(RolesGuard)
// @UseInterceptors()
// @ApiUseTags('cats')
export class CommunityMemberController{
    constructor(
        private communityMemberService: CommunityMemberService
    ){}

    @Get('communityMember')
    // @Roles('admin')
    public async getAllCommunityMember(){
        const msg = await this.communityMemberService.getAllCommunityMember();
        return msg;
    };

    @Get('communityMember/bhco/:id')
    public async getAllCommunityMemberById(@Param() params){
        const msg = await this.communityMemberService.getAllCommunityMemberByBhco(params.id);
        return msg;
    }

    // @HttpCode(201)
    @Post('communityMember')
    public async addCommunityMember(@Body() cMember : CreateCMemberDto){
        const msg = await this.communityMemberService.addCommunityMember(cMember);
        return msg;
    };

    @Get('communityMember/:id')
    // @Roles('general')
    public async getCommunityMember(@Param() params){
        const msg = await this.communityMemberService.getCommunityMember(params.id);
        return msg;
    };

    @Patch('communityMember/:id')
    public async upadateCommunityMember(@Param() params,@Body() newCommunityMember:CreateCMemberDto){
        const msg = await this.communityMemberService.updateCommunityMember(params.id,newCommunityMember);
        return msg;
    }

    @Delete('communityMember/:id')
    public async deleteCommunityMember(@Param() params){
        const msg = await this.communityMemberService.deleteCommunityMember(params.id);
        return msg;
    }

    @Get('unAssignedCommunityMember/:id')
    public async getUnAssignedCommunityMember(@Param() params){
        const msg = await this.communityMemberService.getUnAssignedCommunityMember(params.id);
        return msg;
    }

    @Get('AssignedCommunityMember/:id')
    public async getAssignedCommunityMember(@Param() params){
        const msg = await this.communityMemberService.getAssignedCommunityMember(params.id);
        return msg;
    }

    @Patch('assign/CommunityMember/:id')
    public async assignCommunityMember(@Param() params,@Body() communityMemberIDs:any){
        const msg = await this.communityMemberService.assignCommunityMember(params.id,communityMemberIDs);
        return msg;
    }

    @Patch('unAssign/CommunityMember/')
    public async unAssignCommunityMember(@Body() communityMemberIDs:any){
        const msg = await this.communityMemberService.unAssignCommunityMember(communityMemberIDs);
        return msg;
    }

    @Get('communityMemberByState/:id')
    public async getCommunityMemberByState(@Param() params){
        const msg = await this.communityMemberService.getAllCommunityMemberByState(params.id);
        return msg;
    }

    @Get('communityMemberByCommunity/:id')
    public async getCommunityMemberByCommunity(@Param() params){
        const msg = await this.communityMemberService.getAllCommunityMemberByCommunity(params.id);
        return msg;
    }

    // @Get('testInterceptor')
    // @UseInterceptors(LoggingInterceptor)
    // async testInterceptor() {
    //     console.log('執行testInterceptor()');
    //     //return;
    // }

    // @Get('testTransformInterceptor')
    // @UseInterceptors(TransformInterceptor)
    // async testTransformInterceptor() {
    //     return "test response";
    // }
    //
    // @Get('testExceptionInterceptor')
    // @UseInterceptors(ExceptionInterceptor)
    // async testExceptionInterceptor() {
    //     throw new Error('test ExceptionInterceptor');
    // }
}
