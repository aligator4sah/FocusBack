import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import {AnswerService} from "./answer.service";
import {CreateAnswerDto} from "./DTO/create-Answer.dto";

@Controller('answer')
export class AnswerController {
    constructor(
        private answerService:AnswerService
    ){}

    @Get()
    public async getAllAnswer(){
        const msg = await this.answerService.getAllAnswer();
        return msg;
    }

    @Get(':id')
    public async getAnswerById(@Param() params){
        const msg = await this.answerService.getAnswerById(params.id);
        return msg;
    }

    @Get('/session/:id')
    public async getAnswerBySessionId(@Param() params){
        const msg = await this.answerService.getAnswersBySessionId(params.id);
        return msg;
    }

    @Patch(':id')
    public async addAnswer(@Param() params,@Body() answers:CreateAnswerDto[]){
        const msg = await this.answerService.addAnswer(params.id,answers);
        return msg;
    }
    //need more discussion
    @Patch(':id')
    public async updateAnswer(@Param() params,@Body() newAnswers:CreateAnswerDto[]){
        const msg = await this.answerService.updateAnswer(params.id,newAnswers);
        return msg;
    }

    @Delete(':id')
    public async deleteAnswer(@Param() params){
        const msg = await this.answerService.deleteAnswer(params.id);
        return msg;
    }

    @Post()
    // @Roles('systemAdmin','stateAdmin','communityAdmin','bhco')
    public async getAnswerByDomainAndSession(@Body() params){
        const msg = await this.answerService.getAnswerByDomainAndSession(params);
        return msg;
    }

}