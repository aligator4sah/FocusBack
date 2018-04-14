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


@Controller('communityMember')
// @UseFilters(new HttpExceptionFilter())
// @UseGuards(RolesGuard)
// @UseInterceptors()
// @ApiUseTags('cats')
export class CommunityMemberController{
    constructor(
        private communityMemberService: CommunityMemberService
    ){}

    @Get()
    // @Roles('admin')
    public async getAllCommunityMember(){
        const msg = await this.communityMemberService.getAllCommunityMember();
        return msg;
    };

    // @HttpCode(201)
    @Post()
    public async addCommunityMember(@Body() cMember : CreateCMemberDto){
        const msg = await this.communityMemberService.addCommunityMember(cMember);
        return msg;
    };

    @Get(':id')
    // @Roles('general')
    public async getCommunityMember(@Param() params){
        const msg = await this.communityMemberService.getCommunityMember(params.id);
        return msg;
    };

    @Patch(':id')
    public async upadateCommunityMember(@Param() params,@Body() newCommunityMember:CreateCMemberDto){
        const msg = this.communityMemberService.updateCommunityMember(params.id,newCommunityMember);
        return msg;
    }

    @Delete(':id')
    public async deleteCommunityMember(@Param() params){
        const msg = this.communityMemberService.deleteCommunityMember(params.id);
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
