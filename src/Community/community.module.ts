import {Module} from "@nestjs/common";
import { DatabaseModule } from '../Database/database.module'
import {CommunityController} from "./community.controller";
import {CommunityService} from "./community.service";
import {communityProvider} from "./community.providers";

@Module({
    imports:[
        DatabaseModule
    ],
    components:[
        communityProvider,
        CommunityService
    ],
    controllers:[
        CommunityController
    ]
})

export class CommunityModule{}