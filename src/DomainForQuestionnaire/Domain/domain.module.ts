import {Module} from "@nestjs/common";
import { DatabaseModule } from '../../Database/database.module'
import { domainProvider} from "./domain.providers";
import { DomainController} from "./domain.controller";
import { DomainService} from "./domain.service";

@Module({
    imports:[DatabaseModule],
    components:[
        domainProvider,
        DomainService
    ],
    controllers:[
        DomainController
    ]
})

export class DomainModule {}