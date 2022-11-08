import { Injectable } from '@nestjs/common';
import { CustomerDto } from '../models/customer.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CustomerService {
  private customers: CustomerDto[] = [];
  constructor() {
    this.customers.push({
      uuid: uuid(),
      name: 'customerOne',
      email: 'customer1@mail.com',
      nit: '900123456',
    });
  }
}
