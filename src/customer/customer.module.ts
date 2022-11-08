import { Module } from '@nestjs/common';
import { CuscomerController } from './controllers/cuscomer.controller';
import { CustomerService } from './services/customer.service';

@Module({
  controllers: [CuscomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
