import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getInputParameterValues(@Body() body: any): any {
    return this.appService.getInputParameterValues(body);
  }
}
