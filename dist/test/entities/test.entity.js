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
exports.Test = void 0;
const typeorm_1 = require("typeorm");
let Test = class Test {
};
exports.Test = Test;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Test.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Test.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ select: true, comment: '注释', default: '123', nullable: true }),
    __metadata("design:type", String)
], Test.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array'),
    __metadata("design:type", Array)
], Test.prototype, "names", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-json'),
    __metadata("design:type", Object)
], Test.prototype, "json", void 0);
__decorate([
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], Test.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Test.prototype, "createTime", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: [1, 2, 3],
        default: 1
    }),
    __metadata("design:type", Number)
], Test.prototype, "robert", void 0);
exports.Test = Test = __decorate([
    (0, typeorm_1.Entity)()
], Test);
//# sourceMappingURL=test.entity.js.map