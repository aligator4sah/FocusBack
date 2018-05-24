import { Component,Inject} from '@nestjs/common';
import { RelationshipEntity} from './relationship.entity';
import { IRelationship,IRelationshipService} from './Interfaces';
import { Repository } from 'typeorm';

@Component()
export class RelationshipService implements IRelationshipService{
  constructor(
    @Inject('RelationshipRepository') private readonly relationshipRepository:Repository<RelationshipEntity>
  ){}

  public async getAllRelationship():Promise<Array<RelationshipEntity>>{
    return await this.relationshipRepository.find();
  }

  public async addRelationship(relationship:IRelationship):Promise<RelationshipEntity>{
    return await this.relationshipRepository.save(relationship);
  }


}