import { IsInt,IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateAnswerDto {
    @ApiModelProperty()
    @IsInt()
    id:number;

    @ApiModelProperty()
    @IsInt()
    questionid:number;

    @ApiModelProperty()
    answer:any;

    @ApiModelProperty()
    session:any;
}