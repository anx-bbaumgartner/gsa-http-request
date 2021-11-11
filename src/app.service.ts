import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInputParameterValues(body: any): any {
    console.log(body);
    return body;
  }
}
