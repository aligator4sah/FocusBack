import { Module,NestModule, MiddlewaresConsumer, UseFilters  } from '@nestjs/common';
import {CommunityMemberModule} from "./CommunityMembers/communityMember.module";
import { LoggerMiddleware } from './shared/middlewares/logger.middleware'
import { CommunityMemberController } from "./CommunityMembers/communityMember.controller";
import { HttpExceptionFilter } from './Shared/ExceptionFilters/http-exception.filter';
import {BhcoModule} from "./Bhco/bhco.module";
import {StateAdminModule} from "./StateAdmin/stateAdmin.module";
import {SystemAdminModule} from "./SystemAdmin/systemAdmin.module";
import {CommunityAdminModule} from "./CommunityAdmin/communityAdmin.module";
import {DemographicModule} from "./Demographic/demographic.module";
import {QuestionnaireModule} from "./Questionnaire/questionnaire.module";
import {AnswerModule} from "./Answer/answer.module";
import {CommunityModule} from "./Community/community.module";
import {StateModule} from "./State/state.module";
import {CountyModule} from "./County/county.module";
import {CityModule} from "./City/city.module";
import {BlockModule} from "./Block/block.module";
import {FamilyModule} from "./Family/family.module";
import {UserDemographicModule} from "./UserDemographic/userDemographic.module";

@Module({
  modules:[
      CommunityMemberModule,
      BhcoModule,
      StateAdminModule,
      SystemAdminModule,
      CommunityAdminModule,
      DemographicModule,
      QuestionnaireModule,
      AnswerModule,
      CommunityModule,
      StateModule,
      CountyModule,
      CityModule,
      BlockModule,
      FamilyModule,
      UserDemographicModule
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