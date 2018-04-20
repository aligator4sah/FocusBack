import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDemographicDto {
    @ApiModelProperty()
    @IsInt()
    id:number;

    @ApiModelProperty()
    @IsInt()
    userid:number;

    @ApiModelProperty()
    @IsInt()
    questionid:number;

    @ApiModelProperty()
    @IsString()
    answer:string;
}