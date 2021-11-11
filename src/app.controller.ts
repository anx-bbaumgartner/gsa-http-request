import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getInputParameterValues(@Body() body: any): any {
    return this.appService.getInputParameterValues(body);
  }
}
