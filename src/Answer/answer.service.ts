import { Component ,Inject} from "@nestjs/common";
import { Repository } from 'typeorm';
import {AnswerEntity} from "./answer.entity";
import {IAnswer,IAnswerService} from "./Interfaces";

@Component()
export class AnswerService implements IAnswerService{
    constructor(
        @Inject('AnswerRepository') private readonly answerRepository: Repository<AnswerEntity>
    ){}


    public async getAllAnswer():Promise<Array<AnswerEntity>>{
        return await this.answerRepository.find();
    }
    public async getAllAnswerByUser(id:number):Promise<Array<AnswerEntity>>{
        return await this.answerRepository.find({userid:id});
    }

    public async getAnswer(id:number):Promise<AnswerEntity|null>{
        return await this.answerRepository.findOneById(id);
    }

    public async addAnswer(answer:IAnswer):Promise<AnswerEntity>{
        return await this.answerRepository.save(answer);
    }
    public async updateAnswer(id:number,newAnswer:IAnswer):Promise<AnswerEntity|null>{
        const answer = await this.answerRepository.findOneById(id);
        if(!answer){
            console.log("answer does not exist");
        }
        await this.answerRepository.updateById(id,newAnswer);
        return this.answerRepository.findOneById(id);
    }
    public async deleteAnswer(id:number):Promise<string>{
        await this.answerRepository.deleteById(id);
        const answer = await this.answerRepository.findOneById(id);
        if(answer){
            return 'delete fail';
        }else{
            return 'delete success';
        }
    }
}