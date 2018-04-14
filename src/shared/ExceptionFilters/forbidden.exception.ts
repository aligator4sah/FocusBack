import { HttpException } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common";

export class CustomForbiddenException extends HttpException {
    constructor() {
        super('access forbidden', HttpStatus.FORBIDDEN);
    }
}