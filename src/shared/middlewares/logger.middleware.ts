import { Middleware, ExpressMiddleware, NestMiddleware } from '@nestjs/common';

@Middleware()
export class LoggerMiddleware implements NestMiddleware {

    resolve(message: string): ExpressMiddleware {
        return (req, res, next) => {
            console.log(`${message}`);
            console.log('running middleware');
            next();
        }
    }
}