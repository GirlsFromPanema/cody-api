import { Injectable } from '@nestjs/common';
//import { Any } from 'typeorm';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World';
  }
}
