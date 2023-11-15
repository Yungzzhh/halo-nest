import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Logger } from 'src/middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Tags } from './entities/tags.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Tags])],
  controllers: [UserController],
  providers: [UserService],
  // exports: [UserService], // 导出之后可以作为共享模块 可以在appModule中使用
})
export class UserModule {}
// export class UserModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(Logger).forRoutes({
//       path: 'user',
//       method: RequestMethod.POST
//     })
//     // consumer.apply(Logger).forRoutes('path')
//     // consumer.apply(Logger).forRoutes(UserController)
//     // 3种拦截方式
//   }
// }
