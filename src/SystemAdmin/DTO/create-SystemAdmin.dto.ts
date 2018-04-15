import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateSystemAdminDto{
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
}