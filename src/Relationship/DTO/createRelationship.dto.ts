import {ApiModelProperty} from '@nestjs/swagger';
import { IsInt,IsString} from 'class-validator';

export class CreateRelationshipDto {
  @ApiModelProperty()
  @IsInt()
  id: number;

  @ApiModelProperty()
  @IsString()
  relationship:string;

  @ApiModelProperty()
  socialNetwork:any;
}