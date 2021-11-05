/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessProductController } from 'src/business-product/business-product.controller';
import { BusinessProductService } from 'src/business-product/business-product.service';
import { BusinessProduct } from '../entities/business-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BusinessProduct])],
  providers: [BusinessProductService],
  controllers: [BusinessProductController],
})
export class BusinessProductModule {}
