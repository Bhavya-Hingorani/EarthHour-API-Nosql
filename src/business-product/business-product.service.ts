import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessProduct } from 'src/eathHour/entities/business-product.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class BusinessProductService {
  constructor(
    @InjectRepository(BusinessProduct)
    private businessProductRepository: Repository<BusinessProduct>,
  ) {}

  createBusinessProduct(
    businesssProduct: BusinessProduct,
  ): Promise<BusinessProduct> {
    return this.businessProductRepository.save(businesssProduct);
  }

  async productSold(id: number): Promise<UpdateResult> {
    const bp = await this.businessProductRepository.findOne(id);
    bp.isActive = false;
    return this.businessProductRepository.update(id, bp);
  }

  findAll(): Promise<BusinessProduct[]> {
    return this.businessProductRepository.find({
      where: {
        isActive: true,
      },
    });
  }

  findOne(id: number): Promise<BusinessProduct> {
    return this.businessProductRepository.findOne(id);
  }
}
