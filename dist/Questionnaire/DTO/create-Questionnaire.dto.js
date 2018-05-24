"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateQuestionnaireDto {
}
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], CreateQuestionnaireDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateQuestionnaireDto.prototype, "label", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], CreateQuestionnaireDto.prototype, "order", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Object)
], CreateQuestionnaireDto.prototype, "domain", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Object)
], CreateQuestionnaireDto.prototype, "subdomain", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateQuestionnaireDto.prototype, "questiontype", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsJSON(),
    __metadata("design:type", Object)
], CreateQuestionnaireDto.prototype, "options", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Number)
], CreateQuestionnaireDto.prototype, "weight", void 0);
exports.CreateQuestionnaireDto = CreateQuestionnaireDto;
//# sourceMappingURL=create-Questionnaire.dto.js.map