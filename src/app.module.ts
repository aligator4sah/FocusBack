import {Module, NestModule, MiddlewaresConsumer, UseFilters, RequestMethod} from '@nestjs/common';
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
import {CommunityModule} from "./Community/community.module";
import {StateModule} from "./State/state.module";
import {CountyModule} from "./County/county.module";
import {CityModule} from "./City/city.module";
import {BlockModule} from "./Block/block.module";
import {FamilyModule} from "./Family/family.module";
import {UserDemographicModule} from "./UserDemographic/userDemographic.module";
import {DomainModule} from "./DomainForQuestionnaire/Domain/domain.module";
import {SubDomainModule} from "./DomainForQuestionnaire/SubDomain/subDomain.module";
import {SessionModule} from "./Session/session.module";
import {AnswerModule} from "./Answer/answer.module";
import { SocialNetworkModule } from './SocialNetwork/socialNetwork.module';
import { RelationshipModule } from './Relationship/relationship.module';

@Module({
  modules:[
      CommunityMemberModule,
      BhcoModule,
      StateAdminModule,
      SystemAdminModule,
      CommunityAdminModule,
      DemographicModule,
      QuestionnaireModule,
      CommunityModule,
      StateModule,
      CountyModule,
      CityModule,
      BlockModule,
      FamilyModule,
      UserDemographicModule,
      DomainModule,
      SubDomainModule,
      SessionModule,
      AnswerModule,
      SocialNetworkModule,
      RelationshipModule
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
export class AppModule {}