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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const tags_entity_1 = require("./entities/tags.entity");
let UserService = class UserService {
    constructor(user, tag) {
        this.user = user;
        this.tag = tag;
    }
    async addTags(params) {
        const userInfo = await this.user.findOne({ where: { id: params.userId } });
        const tagList = [];
        for (let i = 0; i < params.tags.length; i++) {
            let T = new tags_entity_1.Tags();
            T.tags = params.tags[i];
            await this.tag.save(T);
            tagList.push(T);
        }
        userInfo.tags = tagList;
        console.log(userInfo, 1);
        return this.user.save(userInfo);
    }
    create(createUserDto) {
        const data = new user_entity_1.User();
        data.name = createUserDto.name;
        data.desc = createUserDto.desc;
        return this.user.save(data);
    }
    async findAll(query) {
        const data = await this.user.find({
            relations: ['tags'],
            where: {
                name: (0, typeorm_2.Like)(`%${query.keyword}%`)
            },
            order: {
                id: "DESC"
            },
            skip: (query.page - 1) * query.pageSize,
            take: query.pageSize
        });
        console.log(data);
        const total = await this.user.count({
            where: {
                name: (0, typeorm_2.Like)(`%${query.keyword}%`)
            }
        });
        return {
            data,
            total
        };
    }
    update(id, updateUserDto) {
        return this.user.update(id, updateUserDto);
    }
    remove(id) {
        return this.user.delete(id);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(tags_entity_1.Tags)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map