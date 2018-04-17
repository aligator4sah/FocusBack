import {Module} from "@nestjs/common";
import { DatabaseModule } from '../Database/database.module'
import {questionnaireProvider} from "./questionnaire.providers";
import {QuestionnaireController} from "./questionnaire.controller";
import {QuestionnaireService} from "./questionnaire.service";

@Module({
    imports:[DatabaseModule],
    controllers:[QuestionnaireController],
    components:[
        QuestionnaireService,
        questionnaireProvider
    ]
})

export class QuestionnaireModule{};