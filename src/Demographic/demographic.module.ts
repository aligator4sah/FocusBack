import {Module} from "@nestjs/common";
import { DatabaseModule } from '../Database/database.module'
import { DemographicController} from "./demographic.controller";
import { DemographicService} from "./demographic.service";
import { demographicProvider} from "./demographic.providers";

@Module({
    imports:[DatabaseModule],
    controllers:[
        DemographicController
    ],
    components:[
        demographicProvider,
        DemographicService
    ]
})


export class DemographicModule{}