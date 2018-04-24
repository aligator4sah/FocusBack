import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';


export class CreateCMemberDto{
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
    gender: string;

    @ApiModelProperty()
    @IsInt()
    phone: string;

    @ApiModelProperty()
    @IsString()
    email: string;

    @ApiModelProperty()
    @IsString()
    date: string;

    @ApiModelProperty()
    @IsString()
    addressone: string;

    @ApiModelProperty()
    @IsString()
    addresstwo: string;

    @ApiModelProperty()
    @IsString()
    family: string;

    @ApiModelProperty()
    @IsString()
    block: string;

    @ApiModelProperty()
    community: any;

    @ApiModelProperty()
    @IsString()
    city: string;

    @ApiModelProperty()
    @IsString()
    county: string;

    @ApiModelProperty()
    @IsString()
    state: string;

    @ApiModelProperty()
    @IsString()
    race: string;

    @ApiModelProperty()
    @IsString()
    marry: string;

    @ApiModelProperty()
    @IsString()
    education: string;

    @ApiModelProperty()
    @IsString()
    employments: string;

    @ApiModelProperty()
    assigned:boolean;

    @ApiModelProperty()
    @IsInt()
    bhco: any;
}