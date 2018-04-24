import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateSubDomainDto {
    @ApiModelProperty()
    @IsInt()
    id:number;

    @ApiModelProperty()
    @IsString()
    subdomain:string;

    @ApiModelProperty()
    isolate:boolean;

    @ApiModelProperty()
    domain:any;

    @ApiModelProperty()
    questionnaire:any;
}