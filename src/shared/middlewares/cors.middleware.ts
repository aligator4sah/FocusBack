import {ExpressMiddleware, Middleware, NestMiddleware} from "@nestjs/common";
//unused middleware, nestjs 4.6.1 fiexed cors feature in official package, this middleware does not need anymore
@Middleware()
export class CorsMiddleware implements NestMiddleware {
    resolve(): ExpressMiddleware {
        return(req, res, next) => {
            let allowedOrigins = ["http://localhost:3000","http://localhost:4200"];
            if (allowedOrigins.indexOf(req.header("Origin")) > -1) {
                res.header("Access-Control-Allow-Origin", req.header("Origin"));
                res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                // Request headers you wish to allow
                res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                // Set to true if you need the website to include cookies in the requests sent
                // to the API (e.g. in case you use sessions)
                res.header('Access-Control-Allow-Credentials', true);
                res.header("Content-Type","application/json;charset=utf-8");
            }
            next();
        };
    }
}