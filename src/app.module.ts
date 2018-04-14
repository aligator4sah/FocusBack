import { Module,NestModule, MiddlewaresConsumer, UseFilters  } from '@nestjs/common';
import {CommunityMemberModule} from "./CommunityMembers/communityMember.module";
import { LoggerMiddleware } from './shared/middlewares/logger.middleware'
import { CommunityMemberController } from "./CommunityMembers/communityMember.controller";
import { HttpExceptionFilter } from './Shared/ExceptionFilters/http-exception.filter';

@Module({
  modules:[
      CommunityMemberModule
  ]
})

// @UseFilters(new HttpExceptionFilter())
// export class AppModule  implements NestModule{
//     configure(consumer: MiddlewaresConsumer): void {
//         consumer.apply(LoggerMiddleware)
//             .with('the parameters area coming from root module')
//             .forRoutes(
//                 CommunityMemberController
//             )
//     }
// }
export class AppModule { }