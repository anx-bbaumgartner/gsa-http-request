import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInputParameterValues(body: any): void {
    console.log('Body: ', body);
    //console.log('JSON: ', { body });

    // console.log(body.multi_file.array.length());

    let arrayObjects: any[] = [];

    for (const file in body.multi_file.array) {
      arrayObjects.push(file);
    }

    console.log(arrayObjects);

    // let fileArray: any[] = [];
    // fileArray = body.multi_file.array;
    // fileArray.forEach((file) => {
    //   console.log(file);
    // });
  }
}
