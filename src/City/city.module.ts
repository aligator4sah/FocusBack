import {Module} from "@nestjs/common";
import { DatabaseModule } from '../Database/database.module';
import {CityService} from "./city.service";
import {CityController} from "./city.controller";
import {cityProvider} from "./city.providers";

@Module({
    imports:[DatabaseModule],
    components:[
        cityProvider,
        CityService
    ],
    controllers:[
        CityController
    ]
})

export class CityModule {}