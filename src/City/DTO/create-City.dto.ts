import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateCityDto{
    @ApiModelProperty()
    @IsInt()
    id:number;

    @ApiModelProperty()
    @IsString()
    city:string;

    @ApiModelProperty()
    @IsInt()
    county:any;

    @ApiModelProperty()
    @IsInt()
    community:any;
}