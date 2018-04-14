import {Module} from "@nestjs/common";
import {CommunityMemberController} from './communityMember.controller'
import {CommunityMemberService} from "./communityMember.service";
import {communityMemberProvider} from './communityMember.providers'
import { DatabaseModule } from '../Database/database.module'

@Module({
    imports: [DatabaseModule],
    controllers:[
        CommunityMemberController
    ],
    components:[
        communityMemberProvider,
        CommunityMemberService
    ],
})

export class CommunityMemberModule{}