import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Bill } from 'src/eathHour/entities/bill.entity';
import { BillService } from './bill.service';
import { CreateBillDto } from 'src/eathHour/dto/create-bill.dto';

@Controller('bill')
export class BillController {
  constructor(private readonly billServic: BillService) {}
  @Get(':id')
  getBillsByUserId(@Param() param): Promise<Bill[]> {
    return this.billServic.getBillByBuyerId(param.id);
  }

  @Post()
  createNewBill(@Body() createBillDto: CreateBillDto): Promise<Bill> {
    return this.billServic.createNewBill(createBillDto);
  }
}
