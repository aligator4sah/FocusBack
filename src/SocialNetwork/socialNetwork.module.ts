import { DatabaseModule} from '../Database/database.module';
import { SocialNetworkService} from './socialNetwork.service';
import { socialNetworkProvider} from './socialNetwork.providers';
import { SocialNetworkController} from './socialNetwork.controller';
import { Module} from '@nestjs/common';

@Module({
  imports:[DatabaseModule],
  controllers:[
    SocialNetworkController
  ],
  components:[
    SocialNetworkService,socialNetworkProvider
  ]
})

export class SocialNetworkModule{}