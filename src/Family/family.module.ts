import {Module} from "@nestjs/common";
import { DatabaseModule } from '../Database/database.module'
import { FamilyController} from "./family.controller";
import { FamilyService} from "./family.service";
import { familyProvider} from "./family.providers";

@Module({
    imports:[
        DatabaseModule
    ],
    components:[
        familyProvider,
        FamilyService
    ],
    controllers:[
        FamilyController
    ]
})

export class FamilyModule {}