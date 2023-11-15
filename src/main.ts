import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
// import { Response } from './common/response';
import * as session from 'express-session'
import * as cors from 'cors'
import { join } from 'path';
import { HTTPFilter } from './common/filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, 'images'), { 
    prefix: '/img'
  }) // 静态资源目录访问
  app.use(cors())
  app.use(session({secret: 'U', rolling: true, name: 'u.sid', cookie: {maxAge: 999999}}))
  // app.useGlobalInterceptors(new Response())
  app.useGlobalFilters(new HTTPFilter())
  await app.listen(3000);
}
bootstrap();
