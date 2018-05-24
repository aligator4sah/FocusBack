import { IsString, IsInt,IsJSON } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateQuestionnaireDto{
    @ApiModelProperty()
    @IsInt()
    id:number;

    @ApiModelProperty()
    @IsString()
    label:string;

    @ApiModelProperty()
    @IsInt()
    order:number;

    @ApiModelProperty()
    domain:any;

    @ApiModelProperty()
    subdomain:any;

    @ApiModelProperty()
    @IsString()
    questiontype:string;

    @ApiModelProperty()
    @IsJSON()
    options:any;

    @ApiModelProperty()
    weight: number;
}