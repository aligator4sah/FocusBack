import {Module} from "@nestjs/common";
import { DatabaseModule } from '../Database/database.module'
import { blockProvider} from "./block.providers";
import { BlockController} from "./block.controller";
import { BlockService} from "./block.service";

@Module({
    imports:[
        DatabaseModule
    ],
    controllers:[
        BlockController
    ],
    components:[
        blockProvider,
        BlockService
    ]
})

export class BlockModule {}