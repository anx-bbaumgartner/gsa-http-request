import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInputParameterValues(body: any): any {
    console.log('File: ', body.file);
    console.log('JSON: ', { body });

    let fileArray: any[] = [];
    fileArray.forEach((file) => {
      console.log(file.id);
    });
    return body;
  }
}
