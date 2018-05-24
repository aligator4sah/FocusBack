import { Controller, Post, Get, Body} from '@nestjs/common';
import { CreateRelationshipDto} from './DTO/createRelationship.dto';
import { RelationshipService} from './relationship.service';

@Controller('relationship')
export class RelationshipController {
  constructor(
    private relationshipService: RelationshipService
  ){}

  @Get()
  public async getAllRelationship(){
    const msg = await this.relationshipService.getAllRelationship();
    return msg;
  }

  @Post()
  public async addRelationship(@Body() relationship:CreateRelationshipDto){
    const msg = await this.relationshipService.addRelationship(relationship);
    return msg;
  }
}