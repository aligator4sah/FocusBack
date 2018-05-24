import { IRelationship} from './IRelationship';
import { RelationshipEntity} from '../relationship.entity';

export interface IRelationshipService {
  getAllRelationship():Promise<Array<RelationshipEntity>>;
  addRelationship(relationship:IRelationship):Promise<RelationshipEntity>;
}