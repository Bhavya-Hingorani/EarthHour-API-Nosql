import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bill } from 'src/eathHour/entities/bill.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class BillService {
  constructor(
    @InjectRepository(Bill)
    private billRepository: Repository<Bill>,
  ) {}

  getBillByBuyerId(id: number): Promise<Bill[]> {
    return this.billRepository.find({ relations: ['buyer', 'product'] });
  }

  createNewBill(bill: Bill): Promise<Bill> {
    return this.billRepository.save(bill);
  }
}
