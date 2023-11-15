<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Study

app.module.ts 根模块用于处理其他类的引用和共享
app.controller.ts 常见功能是用来处理http请求以及调用service层的处理方法
app.service.ts 封装通用的业务逻辑、与数据层的交互（数据库）、其他额外的三方请求

nest --help  
`nest g resource [name]`

restful 风格设计
通过一个接口完成增删查改，通过不同的请求方式进行区分

版本控制

参数装饰器
@Request
@Query
@Body
@Param
@Header

方法装饰器
@HttpCode

## 插件

npm i @types/express-session -D
npm i express-session --save

** 验证码生成插件 **
svgCaptcha

## 公用模块

## 中间件

在路由处理程序之前调用
可访问请求和响应对象
可以对请求和响应进行更改
可以结束请求-响应周期
调用堆栈中的下一个中间件函数
如果当前的中间件函数没有结束请求-响应周期，他必须调用next()将控制传递到下一个中间件函数，否则请求将被挂起
生成中间件： `nest g mi logger`

## 处理跨域

最新版本的nest已经内部集成了express的跨域了

```js
const app = await NestFactory.create(AppModule, { cors: true });
```

`npm i cors`
`npm i @types/cors -D`

```js
import * as cors from "cors";
app.use(cors());
```

## 上传图片和静态目录

`npm i multer`
`npm i @types/multer -D`

在 upload Module 使用MulterModule register注册存放图片的目录
需要用到 multer 的 distStorage 设置存放目录 extname 用来读取文件后缀 filename 给文件重新命名

## 下载图片

download / 文件流下载
`npm i compressing`

- 为什么流下载要比download要安全？

* 流下载的主要优势在于支持断点续传，这意味着在下载过程中如果出现中断，可以从中断点重新开始，而不是从头开始。这种方式对于大型文件或网络连接不稳定的环境尤为有用。
* 某些场景下可以结合token等验证机制来增强安全性。

## Rxjs

使用观察者模式 用于编写异步队列和事件处理
Observable 可观察的物件
Subscription 监听Observable
Operators 纯函数 处理管道的数据

## 响应拦截器

## 异常拦截器

## 管道验证DTO ?

npm i --save class-validator class-transformer

dto和Entity区别在哪呢，一个是验证的验证前端传过来的参数一个是定义实体的也就是定义字段的

## 守卫 ?

守卫在中间件之后执行 在任何拦截器或管道之前执行
可以做权限控制

## 自定义装饰器 ?

## swagger ?

`npm i @nestjs/swagger swagger-ui-express`

## 连接数据库

`npm install --save @nestjs/typeorm typeorm mysql2`

vscode数据库可视工具：Database Client

需要在app.module.ts中

```ts
@Module({
imports: [TypeOrmModule.forRoot({
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
    }),]
})
```

## 实体

一个映射到数据库表的类
可以通过定义一个新类来创建一个实体，并用@Entity()来标记

## 一个简单的crud

`nest g res [crud module]`

[crud module].module.ts

```ts
// 处理好参数的传递 把用户参数传入到service模块中 并需要在app.module.ts中注册
@Module({
  imports: [TypeOrmModule.forFeature([User])],
})
```

[crud module]/dto/[crud module]-[crud module].dto.ts

```ts
// 定义好dto的类
export class CreateUserDto {
  name: string;
  desc: string;
}
```

[crud module]/entities/[crud module].entity.ts

```ts
// 创建好数据库的表
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  desc: string;
}
```

[crud module]/[crud module].service.ts

```ts
// 利用typeorm进行各种操作
```


## typeOrm如何进行表关联

