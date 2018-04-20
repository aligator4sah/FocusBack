import {Module} from "@nestjs/common";
import { DatabaseModule } from '../Database/database.module'
import {UserDemographicController} from "./userDemographic.controller";
import {UserDemographicService} from "./userDemographic.service";
import {userDemographicProvider} from "./userDemographic.providers";

@Module({
    imports:[DatabaseModule],
    components:[
        userDemographicProvider,
        UserDemographicService
    ],
    controllers:[
        UserDemographicController
    ]
})

export class UserDemographicModule{}