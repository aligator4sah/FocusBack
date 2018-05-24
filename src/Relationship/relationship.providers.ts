import { RelationshipEntity} from './relationship.entity';
import { Connection } from 'typeorm';

export const relationshipProvider = {
  provide:'RelationshipRepository',
  useFactory:(connection:Connection) => connection.getRepository(RelationshipEntity),
  inject: ['TypeORMInstance']
}