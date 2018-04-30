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
class CreateCMemberDto {
}
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], CreateCMemberDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateCMemberDto.prototype, "username", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateCMemberDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateCMemberDto.prototype, "firstname", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateCMemberDto.prototype, "midname", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateCMemberDto.prototype, "lastname", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateCMemberDto.prototype, "gender", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsInt(),
    __metadata("design:type", String)
], CreateCMemberDto.prototype, "phone", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateCMemberDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateCMemberDto.prototype, "date", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateCMemberDto.prototype, "addressone", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateCMemberDto.prototype, "addresstwo", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateCMemberDto.prototype, "family", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateCMemberDto.prototype, "block", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Object)
], CreateCMemberDto.prototype, "community", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateCMemberDto.prototype, "city", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateCMemberDto.prototype, "county", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateCMemberDto.prototype, "state", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateCMemberDto.prototype, "race", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateCMemberDto.prototype, "marry", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateCMemberDto.prototype, "education", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateCMemberDto.prototype, "employments", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Boolean)
], CreateCMemberDto.prototype, "assigned", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsInt(),
    __metadata("design:type", Object)
], CreateCMemberDto.prototype, "bhco", void 0);
exports.CreateCMemberDto = CreateCMemberDto;
//# sourceMappingURL=create-CMember.dto.js.map