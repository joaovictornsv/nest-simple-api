import { PrismaService } from 'src/database/prisma.service';
import { CreateCustomerBody } from 'src/dtos/create-customer-body';
import { Customer } from 'src/entities/customer';
import { CustomerRepository } from '../customer-repository';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaCustomerRepository implements CustomerRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(body: CreateCustomerBody): Promise<void> {
    const UUID = randomUUID();

    await this.prisma.customer.create({
      data: {
        id: UUID,
        name: body.name,
        role: body.role,
      },
    });
  }

  async findById(id: string): Promise<Customer> {
    const customer = await this.prisma.customer.findUnique({
      where: {
        id,
      },
    });

    return customer;
  }
}
