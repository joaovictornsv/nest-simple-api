import { Injectable } from '@nestjs/common';
import { CreateCustomerBody } from './dtos/create-customer-body';
import { Customer } from './entities/customer';
import { CustomerRepository } from './repositories/customer-repository';

@Injectable()
export class AppService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async create(body: CreateCustomerBody): Promise<void> {
    await this.customerRepository.create(body);
  }

  async findById(id: string): Promise<Customer> {
    const customer = await this.customerRepository.findById(id);
    return customer;
  }
}
