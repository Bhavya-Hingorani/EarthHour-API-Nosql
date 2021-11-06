import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerProduct } from 'src/eathHour/entities/customer-product.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class CustomerProductService {
  constructor(
    @InjectRepository(CustomerProduct)
    private customerProductRepository: Repository<CustomerProduct>,
  ) {}

  findAllActive(): Promise<CustomerProduct[]> {
    return this.customerProductRepository.find({
      where: {
        isActive: true,
      },
      relations: ['seller'],
    });
  }

  findOne(id: number): Promise<CustomerProduct> {
    return this.customerProductRepository.findOne({
      where: {
        cProId: id,
      },
      relations: ['seller'],
    });
  }

  addCustomerProduct(
    customerProduct: CustomerProduct,
  ): Promise<CustomerProduct> {
    return this.customerProductRepository.save(customerProduct);
  }

  async updateActiveStatus(id: number): Promise<UpdateResult> {
    const cp = await this.customerProductRepository.findOne(id);
    cp.isActive = false;
    return this.customerProductRepository.update(id, cp);
  }
}
