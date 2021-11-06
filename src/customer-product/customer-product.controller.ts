import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CustomerProductService } from './customer-product.service';
import { CustomerProduct } from 'src/eathHour/entities/customer-product.entity';
import { UpdateResult } from 'typeorm';
import { CreateCustomerProductDto } from 'src/eathHour/dto/create-customer-product.dto';

@Controller('customer-product')
export class CustomerProductController {
  constructor(
    private readonly customerProductService: CustomerProductService,
  ) {}
  @Get()
  getAllCustomerProducts(): Promise<CustomerProduct[]> {
    return this.customerProductService.findAll();
  }

  @Put(':id')
  async updateActiveStatus(@Param() param): Promise<UpdateResult> {
    return await this.customerProductService.updateActiveStatus(param.id);
  }

  @Post()
  addCustomerProduct(
    @Body() createCustomerProductDto: CreateCustomerProductDto,
  ): Promise<CustomerProduct> {
    return this.customerProductService.addCustomerProduct(
      createCustomerProductDto,
    );
  }
}
