import {Module} from "@nestjs/common";
import { DatabaseModule } from '../Database/database.module'
import { CommunityAdminController} from "./communityAdmin.controller";
import { CommunityAdminService} from "./communityAdmin.service";
import { communityAdminProvider} from "./communityAdmin.providers";

@Module({
    imports:[
        DatabaseModule
    ],
    components:[
        CommunityAdminService,
        communityAdminProvider
    ],
    controllers:[
        CommunityAdminController
    ]
})

export class CommunityAdminModule{}