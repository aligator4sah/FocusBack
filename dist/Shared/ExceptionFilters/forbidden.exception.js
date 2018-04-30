"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
class CustomForbiddenException extends common_1.HttpException {
    constructor() {
        super('access forbidden', common_2.HttpStatus.FORBIDDEN);
    }
}
exports.CustomForbiddenException = CustomForbiddenException;
//# sourceMappingURL=forbidden.exception.js.map