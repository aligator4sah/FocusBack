import {Module} from "@nestjs/common";
import { DatabaseModule } from '../Database/database.module'
import { StateAdminController} from "./stateAdmin.controller";
import { StateAdminService} from "./stateAdmin.service";
import { stateAdminProvider} from "./stateAdmin.providers";

@Module({
    imports:[DatabaseModule],
    components:[
        StateAdminService,
        stateAdminProvider
    ],
    controllers:[
        StateAdminController
    ]
})

export class StateAdminModule{}