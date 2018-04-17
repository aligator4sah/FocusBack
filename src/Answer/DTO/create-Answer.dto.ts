import { IsInt,IsJSON } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateAnswerDto{
    @ApiModelProperty()
    @IsInt()
    id:number;

    @ApiModelProperty()
    @IsInt()
    userid:number;

    @ApiModelProperty()
    @IsInt()
    sessionid:number;

    @ApiModelProperty()
    @IsJSON()
    answers:any;

}