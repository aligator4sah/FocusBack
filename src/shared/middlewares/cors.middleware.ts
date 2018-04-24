import {ExpressMiddleware, Middleware, NestMiddleware} from "@nestjs/common";

@Middleware()
export class CorsMiddleware implements NestMiddleware {
    resolve(): ExpressMiddleware {
        return(req, res, next) => {
            let allowedOrigins = ["http://localhost:3000","http://localhost:4200"];
            if (allowedOrigins.indexOf(req.header("Origin")) > -1) {
                res.header("Access-Control-Allow-Origin", req.header("Origin"));
                res.header("Access-Control-Allow-Headers", "content-types,Access-Control-Allow-Headers");
                res.header("Access-Control-Allow-Methods", "POST,GET,DELETE,PATCH,OPTIONS");
                res.header("Content-Type","application/json;charset=utf-8");
            }
            next();
        };
    }
}