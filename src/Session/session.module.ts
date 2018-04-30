import {Module} from "@nestjs/common";
import { DatabaseModule } from '../Database/database.module'
import {SessionController} from "./session.controller";
import {SessionService} from "./session.service";
import {sessionProvider} from "./session.providers";
import {answerProvider} from "../Answer/answer.providers";

@Module({
    imports:[
        DatabaseModule
    ],
    controllers:[
        SessionController
    ],
    components:[
        SessionService,
        sessionProvider,
        answerProvider
    ]
})

export class SessionModule {}