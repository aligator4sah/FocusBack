import {AnswerEntity} from "../answer.entity";
import {IAnswer} from "./IAnswer";

export interface IAnswerService {
    getAllAnswer():Promise<Array<AnswerEntity>>;
    getAnswerById(id:number):Promise<AnswerEntity|null>;
    getAnswersBySessionId(sessionId:number):Promise<Array<AnswerEntity>>;
    addAnswer(sessionId:number,answers:IAnswer[]);
    updateAnswer(sessionId:number,newAnswers:IAnswer[]);
    deleteAnswer(sessionId:number):Promise<string>;
}