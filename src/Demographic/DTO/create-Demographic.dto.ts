import { IsString, IsInt,IsJSON } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateDemographicDto{
    @ApiModelProperty()
    @IsInt()
    id:number;

    @ApiModelProperty()
    @IsString()
    label:string;

    @ApiModelProperty()
    @IsString()
    placeholder:string;

    @ApiModelProperty()
    @IsString()
    questiontype:string;

    @ApiModelProperty()
    @IsInt()
    order:number;

    @ApiModelProperty()
    @IsJSON()
    options:any;
}