import { Test, TestingModule } from '@nestjs/testing';
import { CustomerProductService } from './customer-product.service';

describe('CustomerProductService', () => {
  let service: CustomerProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerProductService],
    }).compile();

    service = module.get<CustomerProductService>(CustomerProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
