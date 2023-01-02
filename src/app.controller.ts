import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCustomerBody } from './dtos/create-customer-body';
import { Customer } from './entities/customer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('customers')
  async createCustomer(@Body() body: CreateCustomerBody): Promise<void> {
    await this.appService.create(body);
  }

  @Get('customers/:id')
  async findCustomerById(@Param('id') id: string): Promise<Customer> {
    const customer = await this.appService.findById(id);
    return customer;
  }
}
