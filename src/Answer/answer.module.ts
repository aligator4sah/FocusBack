import {Module} from "@nestjs/common";
import { DatabaseModule } from '../Database/database.module'
import {AnswerController} from "./answer.controller";
import {AnswerService} from "./answer.service";
import {answerProvider} from "./answer.providers";

@Module({
    imports:[
        DatabaseModule
    ],
    components:[
        AnswerService,
        answerProvider
    ],
    controllers:[
        AnswerController
    ]
})

export class AnswerModule {}