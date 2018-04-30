import { IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';


export class CreateSessionDto {
    @ApiModelProperty()
    @IsInt()
    id:number;

    @ApiModelProperty()
    @IsInt()
    userid:number;

    @ApiModelProperty()
    answer:any;

    @ApiModelProperty()
    createdate:any;

    @ApiModelProperty()
    updatedate:any;
}