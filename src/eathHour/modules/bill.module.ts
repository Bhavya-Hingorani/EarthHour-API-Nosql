/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillController } from 'src/bill/bill.controller';
import { BillService } from 'src/bill/bill.service';
import { Bill } from '../entities/bill.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Bill])],
  providers: [BillService],
  controllers: [BillController],
})
export class BillModule {}