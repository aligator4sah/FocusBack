import {Module} from "@nestjs/common";
import { DatabaseModule } from '../Database/database.module'
import { BhcoController} from "./bhco.controller";
import { BhcoService} from "./bhco.service";
import { bhcoProvider} from "./bhco.providers";

@Module({
    imports:[DatabaseModule],
    components:[
        BhcoService,
        bhcoProvider
    ],
    controllers:[
        BhcoController
    ],
})

export class BhcoModule{}