/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerProduct } from '../entities/customer-product.entity';
import { CustomerProductService } from 'src/customer-product/customer-product.service';
import { CustomerProductController } from 'src/customer-product/customer-product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerProduct])],
  providers: [CustomerProductService],
  controllers: [CustomerProductController],
})
export class CustomerProductModule {}
