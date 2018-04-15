import {Module} from "@nestjs/common";
import { DatabaseModule } from '../Database/database.module'
import { systemAdminProvider} from "./systemAdmin.providers";
import {SystemAdminController} from "./systemAdmin.controller";
import {SystemAdminService} from "./systemAdmin.service";

@Module({
    imports:[DatabaseModule],
    components:[
        systemAdminProvider,
        SystemAdminService
    ],
    controllers:[
        SystemAdminController
    ]
})

export class SystemAdminModule{}