import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import {SessionService} from "./session.service";
import {CreateSessionDto} from "./DTO/create-Session.dto";

@Controller('session')
export class SessionController {
    constructor(
        private sessionService: SessionService
    ){}

    @Get()
    public async getAllSession(){
        const msg = await this.sessionService.getAllSession();
        return msg;
    }

    @Get('/user/:id')
    public async getAllSessionByUserId(@Param() params){
        const msg = await this.sessionService.getSessionByUserId(params.id);
        return msg;
    }

    @Get(':id')
    public async getSessionById(@Param() params){
        const msg = await this.sessionService.getSessionById(params.id);
        return msg;
    }

    @Post()
    public async addSession(@Body() session:CreateSessionDto){
        const msg = await this.sessionService.addSession(session);
        return msg;
    }

    @Patch(':id')
    public async updateSession(@Param() params,@Body() newSession:CreateSessionDto){
        const msg = await this.sessionService.updateSession(params.id,newSession);
        return msg;
    }

    @Delete(':id')
    public async deleteSession(@Param() params){
        const msg = await this.sessionService.deleteSession(params.id);
        return msg;
    }
}