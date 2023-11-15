import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AppService2 } from './app.service2';
import { ListModule } from './list/list.module';
import { ConfigModule } from './config/config.module'
import { UploadModule } from './upload/upload.module';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      username: 'root',
      password: '123456aa,',
      host: 'localhost',
      port: 3306,
      database: 'blog', // 库名
      // entities: [__dirname + '/**/*.entity{.ts,.js}'], // 实体文件
      synchronize: true, // 建议生产环境不要使用true， 是否自动将实体类同步到数据库中
      retryDelay: 500, // 重试连接数据库间隔
      retryAttempts: 10, // 重试连接数据库的次数
      autoLoadEntities: true, // 自动加载实体 forFeature() 注册的每个实体都将自动添加到配置对象的实体中
    }),
    TestModule,
    UserModule,
    ListModule,
    ConfigModule.forRoot({
      path: '/vxxx'
    }),
    UploadModule,
    LoginModule], // user 和 list 可以使用config中的方法
  controllers: [AppController],
  providers: [AppService2, {
    provide: 'ABC',
    useClass: AppService
  }, {
      provide: 'Test',
      useValue: ['TB', 'PDD', 'JD']
    }, {
      // 工厂模式
      provide: 'CCC',
      inject: [AppService2],
      useFactory(app: AppService2) { // 支持async + await
        console.log(app.getHello());

        return 123
      }
    }],
})
export class AppModule { }
