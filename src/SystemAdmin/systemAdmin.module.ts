import {Module} from "@nestjs/common";
import { DatabaseModule } from '../Database/database.module'
import { systemAdminProvider} from "./systemAdmin.providers";
import {SystemAdminController} from "./systemAdmin.controller";
import {SystemAdminService} from "./systemAdmin.service";
import {AuthModule} from '../shared/Auth/auth.module';

@Module({
    imports:[
        DatabaseModule
    ],
    components:[
        systemAdminProvider,
        SystemAdminService
    ],
    controllers:[
        SystemAdminController
    ]
})

export class SystemAdminModule{}