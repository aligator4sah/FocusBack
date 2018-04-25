import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateBhcoDto{

    @ApiModelProperty()
    @IsInt()
    id: number;

    @ApiModelProperty()
    @IsString()
    username: string;

    @ApiModelProperty()
    @IsString()
    password: string;

    @ApiModelProperty()
    @IsString()
    firstname: string;

    @ApiModelProperty()
    @IsString()
    midname: string;

    @ApiModelProperty()
    @IsString()
    lastname: string;

    @ApiModelProperty()
    @IsString()
    phone: string;

    @ApiModelProperty()
    @IsString()
    email: string;

    @ApiModelProperty()
    @IsInt()
    state:string;

    @ApiModelProperty()
    @IsString()
    community:string;

    @ApiModelProperty()
    @IsString()
    county: string;

    @ApiModelProperty()
    @IsString()
    city: string;

    @ApiModelProperty()
    @IsString()
    communityMember:any;
}