"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let CorsMiddleware = class CorsMiddleware {
    resolve() {
        return (req, res, next) => {
            let allowedOrigins = ["http://localhost:3000", "http://localhost:4200"];
            if (allowedOrigins.indexOf(req.header("Origin")) > -1) {
                res.header("Access-Control-Allow-Origin", req.header("Origin"));
                res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                res.header('Access-Control-Allow-Credentials', true);
                res.header("Content-Type", "application/json;charset=utf-8");
            }
            next();
        };
    }
};
CorsMiddleware = __decorate([
    common_1.Middleware()
], CorsMiddleware);
exports.CorsMiddleware = CorsMiddleware;
//# sourceMappingURL=cors.middleware.js.map