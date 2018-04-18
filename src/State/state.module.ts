import {Module} from "@nestjs/common";
import { DatabaseModule } from '../Database/database.module'
import { StateController} from "./state.controller";
import { StateService} from "./state.service";
import { stateProvider} from "./state.providers";

@Module({
    imports:[DatabaseModule],
    components:[
       stateProvider,
        StateService
    ],
    controllers:[
        StateController
    ],
})

export class StateModule{}