"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const app_service2_1 = require("./app.service2");
const list_module_1 = require("./list/list.module");
const config_module_1 = require("./config/config.module");
const upload_module_1 = require("./upload/upload.module");
const login_module_1 = require("./login/login.module");
const typeorm_1 = require("@nestjs/typeorm");
const test_module_1 = require("./test/test.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                username: 'root',
                password: '123456aa,',
                host: 'localhost',
                port: 3306,
                database: 'blog',
                synchronize: true,
                retryDelay: 500,
                retryAttempts: 10,
                autoLoadEntities: true,
            }),
            test_module_1.TestModule,
            user_module_1.UserModule,
            list_module_1.ListModule,
            config_module_1.ConfigModule.forRoot({
                path: '/vxxx'
            }),
            upload_module_1.UploadModule,
            login_module_1.LoginModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service2_1.AppService2, {
                provide: 'ABC',
                useClass: app_service_1.AppService
            }, {
                provide: 'Test',
                useValue: ['TB', 'PDD', 'JD']
            }, {
                provide: 'CCC',
                inject: [app_service2_1.AppService2],
                useFactory(app) {
                    console.log(app.getHello());
                    return 123;
                }
            }],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map