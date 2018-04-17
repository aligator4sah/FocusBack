import { Connection } from 'typeorm';
import { QuestionnaireEntity} from "./questionnaire.entity";

export const questionnaireProvider = {
    provide:'QuestionnaireRepository',
    useFactory:(connection:Connection)=>connection.getRepository(QuestionnaireEntity),
    inject:['TypeORMInstance']
}