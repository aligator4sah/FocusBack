import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateBlockDto {
    @ApiModelProperty()
    @IsInt()
    id:number;

    @ApiModelProperty()
    @IsString()
    block:string;

    @ApiModelProperty()
    @IsString()
    startstreet:string;

    @ApiModelProperty()
    @IsString()
    endstreet:string;

    @ApiModelProperty()
    @IsString()
    zipcode:string;

    @ApiModelProperty()
    @IsInt()
    community:any;

    @ApiModelProperty()
    @IsInt()
    family:any;
}