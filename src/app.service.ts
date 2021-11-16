import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInputParameterValues(body: any): void {
    console.log('File: ', body);
    console.log('JSON: ', { body });

    // let fileArray: any[] = [];
    // fileArray = body.file;
    // fileArray.forEach((file) => {
    //   console.log(file.id);
    // });
  }
}
