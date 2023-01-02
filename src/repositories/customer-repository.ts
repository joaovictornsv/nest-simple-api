import { CreateCustomerBody } from 'src/dtos/create-customer-body';
import { Customer } from 'src/entities/customer';

export abstract class CustomerRepository {
  abstract create(body: CreateCustomerBody): Promise<void>;
  abstract findById(id: string): Promise<Customer>;
}
