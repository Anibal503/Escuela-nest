import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/greeting')
  getGreeting(): string{
    return this.appService.getGreeting()
  }


@Post('/suma/:sumando1/:suamdo2')
getResultado(
  @Param("sumando1") sumando1: number,
  @Param("sumando2") sumando2: number,
): number{
 // return this.appService.sumar(sumando1, sumando2);
}
}