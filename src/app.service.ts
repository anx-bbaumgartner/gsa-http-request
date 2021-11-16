import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInputParameterValues(body: any): void {
    console.log('Body: ', body);
    //console.log('JSON: ', { body });

    let fileArray: any[] = [];
    fileArray = body.multi_file.array;
    fileArray.forEach((file) => {
      console.log(file);
    });
  }
}
