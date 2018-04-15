import { Module,NestModule, MiddlewaresConsumer, UseFilters  } from '@nestjs/common';
import {CommunityMemberModule} from "./CommunityMembers/communityMember.module";
import { LoggerMiddleware } from './shared/middlewares/logger.middleware'
import { CommunityMemberController } from "./CommunityMembers/communityMember.controller";
import { HttpExceptionFilter } from './Shared/ExceptionFilters/http-exception.filter';
import {BhcoModule} from "./Bhco/bhco.module";
import {StateAdminModule} from "./StateAdmin/stateAdmin.module";
import {SystemAdminModule} from "./SystemAdmin/systemAdmin.module";
import {CommunityAdminModule} from "./CommunityAdmin/communityAdmin.module";

@Module({
  modules:[
      CommunityMemberModule,
      BhcoModule,
      StateAdminModule,
      SystemAdminModule,
      CommunityAdminModule
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