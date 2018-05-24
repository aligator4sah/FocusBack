import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class  CreateFamilyDto{
    @ApiModelProperty()
    @IsInt()
    id:number;

    @ApiModelProperty()
    @IsString()
    family:string;

    @ApiModelProperty()
    @IsInt()
    block:any;

    @ApiModelProperty()
    @IsString()
    street:string;

    @ApiModelProperty()
    @IsString()
    apartment:string;
}