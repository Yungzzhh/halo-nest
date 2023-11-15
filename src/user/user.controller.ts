import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Req, Res, Session, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import * as svgCaptcha from 'svg-captcha';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/add/tags')
  addTags (@Body() params:{tags:string[],userId:number}) {
    return this.userService.addTags(params)
  }

  @Get('code')
  createCaptcha(@Req() req, @Res() res) {
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50, 
      width: 100,
      height: 34,
      background: '#cc9966'
    })
    req.session.code = captcha.text //存储验证码记录到session
    res.type('image/svg+xml')
    res.send(captcha.data)
  }

  @Post('create')
  createUser(@Body() Body, @Session() session) {
    console.log(Body, session.code);
    if(session.code.toLocaleLowerCase() === Body?.code?.toLocaleLowerCase()) {
      return { 
        code: 200,
        message: '验证码正确'
      }
    }

    return {
      code: 'error',
      message: '验证码错误'
    }
    
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(@Query() query: {
    keyword: string;
    page: number;
    pageSize: number
  }) {
    return this.userService.findAll(query);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
