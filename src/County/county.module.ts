import { DatabaseModule } from '../Database/database.module'
import { Module} from "@nestjs/common";
import { countyProvider} from "./county.providers";
import { CountyService} from "./county.service";
import { CountyController} from "./county.controller";

@Module({
    imports:[
        DatabaseModule
    ],
    components:[
        countyProvider,
        CountyService
    ],
    controllers:[
        CountyController
    ]
})

export class CountyModule {}