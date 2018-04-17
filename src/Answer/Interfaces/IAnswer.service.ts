import {IAnswer} from "./IAnswer";
import {AnswerEntity} from "../answer.entity";

export interface IAnswerService {
    getAllAnswer():Promise<Array<AnswerEntity>>;
    getAllAnswerByUser(id:number):Promise<Array<AnswerEntity>>;
    getAnswer(id:number):Promise<AnswerEntity|null>;
    addAnswer(answer:IAnswer):Promise<AnswerEntity>;
    updateAnswer(id:number,newAnswer:IAnswer):Promise<AnswerEntity|null>;
    deleteAnswer(id:number):Promise<string>;

}