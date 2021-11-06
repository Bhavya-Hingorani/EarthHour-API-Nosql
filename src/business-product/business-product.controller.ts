/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BusinessProduct } from 'src/eathHour/entities/business-product.entity';
import { BusinessProductService } from './business-product.service';
import { CreateBusinessProductDto } from 'src/eathHour/dto/business-product.dto';
import { get } from 'http';
import { UpdateResult } from 'typeorm';

@Controller('business-product')
export class BusinessProductController {
  constructor(
    private readonly businessProductService: BusinessProductService,
  ) {}

  @Get()
  getBusinessProduct(): Promise<BusinessProduct[]> {
    return this.businessProductService.findAll();
  }

  @Get(':id')
  getBusinessProductById(@Param() param): Promise<BusinessProduct> {
    return this.businessProductService.findOne(param.id);
  }

  // @Put(':id')
  // productSold(@Param() param): Promise<UpdateResult> {
  //   return this.businessProductService.productSold(param.id);
  // }

  @Post()
  addBusinessProduct(
    @Body() createBusinessProductDto: CreateBusinessProductDto,
  ): Promise<BusinessProduct> {
    return this.businessProductService.createBusinessProduct(
      createBusinessProductDto,
    );
  }
}
function id(id: any): Promise<BusinessProduct> {
  throw new Error('Function not implemented.');
}
