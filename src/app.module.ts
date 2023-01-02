import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { CustomerRepository } from './repositories/customer-repository';
import { PrismaCustomerRepository } from './repositories/prisma/prisma-customer-repostory.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: CustomerRepository,
      useClass: PrismaCustomerRepository,
    },
  ],
})
export class AppModule {}
