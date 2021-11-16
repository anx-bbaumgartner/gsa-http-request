import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInputParameterValues(body: any): void {
    console.log('Body: ', body);
    //console.log('JSON: ', { body });

    // console.log(body.multi_file.array.length());

    for (const file in body.multi_file.array) {
      console.log(file);
    }

    // let fileArray: any[] = [];
    // fileArray = body.multi_file.array;
    // fileArray.forEach((file) => {
    //   console.log(file);
    // });
  }
}
