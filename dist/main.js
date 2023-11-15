"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const session = require("express-session");
const cors = require("cors");
const path_1 = require("path");
const filter_1 = require("./common/filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, 'images'), {
        prefix: '/img'
    });
    app.use(cors());
    app.use(session({ secret: 'U', rolling: true, name: 'u.sid', cookie: { maxAge: 999999 } }));
    app.useGlobalFilters(new filter_1.HTTPFilter());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map