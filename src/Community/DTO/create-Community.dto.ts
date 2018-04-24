import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateCommunityDto{
    @ApiModelProperty()
    @IsInt()
    id:number;

    @ApiModelProperty()
    @IsString()
    community:string;

    @ApiModelProperty()
    @IsInt()
    city:any;

    @ApiModelProperty()
    @IsInt()
    block:any;

    @ApiModelProperty()
    communitymember:any;
}