import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(
    @Inject('ABC') private readonly appService: AppService,
    @Inject('Test') private readonly shop: string[],
    @Inject('CCC') private readonly ccc: number
  ) {}

  @Get('halo')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('bye')
  getBye(): string[] {
    return this.shop
  }

  @Get('fac')
  getFac() {
    return 1231231
  }
}
