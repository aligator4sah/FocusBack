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
    @IsInt()
    community:any;


}