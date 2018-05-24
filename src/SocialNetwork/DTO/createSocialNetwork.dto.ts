import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateSocialNetworkDto {
  @ApiModelProperty()
  @IsInt()
  id: number;

  @ApiModelProperty()
  @IsInt()
  sessionId: number;

  @ApiModelProperty()
  @IsInt()
  questionId: number;

  @ApiModelProperty()
  @IsInt()
  userId: number;

  // @ApiModelProperty()
  // @IsInt()
  // questionId:number;

  @ApiModelProperty()
  @IsString()
  firstName: string;

  @ApiModelProperty()
  @IsString()
  lastName: string;

  @ApiModelProperty()
  @IsString()
  midName: string;

  @ApiModelProperty()
  weight: number;

  @ApiModelProperty()
  @IsInt()
  block: number;

  @ApiModelProperty()
  relationship: any;
}