import { Module} from '@nestjs/common';
import { DatabaseModule} from '../Database/database.module';
import { RelationshipController} from './relationship.controller';
import { RelationshipService} from './relationship.service';
import { relationshipProvider} from './relationship.providers';

@Module({
  imports:[DatabaseModule],
  controllers:[RelationshipController],
  components:[
    RelationshipService,
    relationshipProvider
  ]
})

export class RelationshipModule {}