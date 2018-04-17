import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import { CreateAnswerDto} from "./DTO/create-Answer.dto";
import {AnswerService} from "./answer.service";

@Controller('answer')
export class AnswerController {
    constructor(
        private answerService:AnswerService
    ){}

    @Get()
    public async getAllAnswer(){
        const msg = this.answerService.getAllAnswer();
        return msg;
    }

    @Get('/user/:id')
    public async getAllAnswerByUser(@Param() params){
        const msg = this.answerService.getAllAnswerByUser(params.id);
        return msg;
    }

    @Get(':id')
    public async getAnswer(@Param() params){
        const msg = this.answerService.getAnswer(params.id);
        return msg;
    }

    @Post()
    public async addAnswer(@Body() answer:CreateAnswerDto){
        const msg = this.answerService.addAnswer(answer);
        return msg;
    }

    @Patch(':id')
    public async updateAnswer(@Param() params,@Body() newAnswer:CreateAnswerDto){
        const msg = this.answerService.updateAnswer(params.id,newAnswer);
        return msg;
    }

    @Delete(':id')
    public async deleteAnswer(@Param() params){
        const msg = this.answerService.deleteAnswer(params.id);
        return msg;
    }
}
