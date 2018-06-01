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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const block_entity_1 = require("./block.entity");
let BlockService = class BlockService {
    constructor(blockRepository) {
        this.blockRepository = blockRepository;
    }
    getAllBlock() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.blockRepository.find();
        });
    }
    getBlock(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.blockRepository.findOneById(id);
        });
    }
    addBlock(InBlock) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.blockRepository.save(InBlock);
            const requestBlock = yield this.blockRepository.findOne({ block: InBlock.block });
            yield typeorm_1.getConnection().createQueryBuilder().relation(block_entity_1.BlockEntity, "community").of(requestBlock.id).set(InBlock.community);
            return yield this.blockRepository.findOneById(requestBlock.id);
        });
    }
    updateBlock(id, newBlock) {
        return __awaiter(this, void 0, void 0, function* () {
            const block = yield this.blockRepository.findOneById(id);
            if (!block) {
                console.log('block does not exist');
            }
            yield this.blockRepository.updateById(id, newBlock);
            return yield this.blockRepository.findOneById(id);
        });
    }
    deleteBlock(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.blockRepository.deleteById(id);
            const block = yield this.blockRepository.findOneById(id);
            if (block) {
                return 'delete fail';
            }
            else {
                return 'delete success';
            }
        });
    }
    getBlockByCommunity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedBlock = yield typeorm_1.getRepository(block_entity_1.BlockEntity)
                .createQueryBuilder("block")
                .leftJoinAndSelect("block.community", "community")
                .where("community.id = :name", { name: id })
                .getMany();
            return selectedBlock;
        });
    }
};
BlockService = __decorate([
    common_1.Component(),
    __param(0, common_1.Inject('BlockRepository')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BlockService);
exports.BlockService = BlockService;
//# sourceMappingURL=block.service.js.map