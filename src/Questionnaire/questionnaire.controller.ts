import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import {CreateQuestionnaireDto} from "./DTO/create-Questionnaire.dto";
import {QuestionnaireService} from "./questionnaire.service";

@Controller('questionnaire')
export class QuestionnaireController {
    constructor(
        private questionnaireService: QuestionnaireService
    ){}

    @Get()
    public async getAllQuestionnaire(){
        const msg = await this.questionnaireService.getAllQuestionnaire();
        return msg;
    }

    @Get(':id')
    public async getQuestionnaire(@Param() params){
        const msg = await this.questionnaireService.getQuestionnaire(params.id);
        return msg;
    }

    @Get("/subDomain/:id")
    public async getQuestionnairesBySubDomain(@Param() params){
        const msg = await this.questionnaireService.getQuestionsBySubdomain(params.id);
        return msg;
    }

    @Post()
    public async addQuestionnaire(@Body() questionnaire:CreateQuestionnaireDto){
        const msg = await this.questionnaireService.addQuestionnaire(questionnaire);
        return msg;
    }

    @Patch(':id')
    public async updateQuestionnaire(@Param() params,@Body() newQuestionnaire: CreateQuestionnaireDto){
        const msg = await this.questionnaireService.updateQuestionnaire(params.id,newQuestionnaire);
        return msg;
    }

    @Delete(':id')
    public async deleteQuestionnaire(@Param() params){
        const msg = await this.questionnaireService.deleteQuestionnaire(params.id);
        return msg;
    }

    @Get('/domain/:id')
    public async getAllQuestionnaireByDomain(@Param() params){
        const msg = await this.questionnaireService.getQuestionnaireByDomain(params.id);
        return msg;
    }
}