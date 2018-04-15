import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateCAdminDto {
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
    @IsString()
    state: string;

    @ApiModelProperty()
    @IsString()
    county: string;

    @ApiModelProperty()
    @IsString()
    city: string;

    @ApiModelProperty()
    @IsString()
    community: string;
}