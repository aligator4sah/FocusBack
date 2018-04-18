import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import {CreateStateDto} from './DTO/create-State.dto'
import {StateService} from "./state.service";

@Controller('state')
export class StateController {
    constructor(
        private stateService:StateService
    ){}

    @Get()
    public async getAllState(){
        const msg = await this.stateService.getAllState();
        return msg;
    }

    @Get(':id')
    public async getState(@Param() params){
        const msg = await this.stateService.getState(params.id);
        return msg;
    }

    @Post()
    public async addState(@Body() state:CreateStateDto){
        const msg = await this.stateService.addState(state);
        return msg;
    }

    @Patch(':id')
    public async updateState(@Param() params,@Body() newState:CreateStateDto){
        const msg = await this.stateService.updateState(params.id,newState);
        return msg;
    }

    @Delete(':id')
    public async deleteState(@Param() params){
        const msg = await this.stateService.deleteState(params.id);
        return msg;
    }
}
