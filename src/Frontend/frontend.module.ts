import {FrontendController} from './frontend.controller';
import {Module} from '@nestjs/common';

@Module({
    controllers:[FrontendController],
})

export class FrontendModule{};