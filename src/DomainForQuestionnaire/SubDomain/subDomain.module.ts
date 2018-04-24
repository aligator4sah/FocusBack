import {Module} from "@nestjs/common";
import { DatabaseModule } from '../../Database/database.module'
import { subDomainProvider} from './subDomain.providers'
import {SubDomainController} from "./subDomain.controller";
import {SubDomainService} from "./subDomain.service";

@Module({
    imports:[DatabaseModule],
    components:[
        SubDomainService,
        subDomainProvider
    ],
    controllers:[
        SubDomainController
    ]
})

export class SubDomainModule {}