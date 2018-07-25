import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import {Module} from '@nestjs/common';

@Module({
    components: [AuthService, JwtStrategy],
})
export class AuthModule {}
