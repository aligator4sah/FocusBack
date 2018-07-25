import * as jwt from 'jsonwebtoken';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import {Component} from '@nestjs/common';

@Component()
export class AuthService {

    constructor(
    ) {}

    async createToken(logInfo: any) {
        const user: JwtPayload = logInfo;
        const expiresIn = 3600;
        const accessToken = jwt.sign(user, 'secretKey', { expiresIn });
        return {
            expiresIn,
            accessToken,
        };
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        // put some validation logic here
        // for example query user by id/email/username
        return ;
    }
}
