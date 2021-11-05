import { Test, TestingModule } from '@nestjs/testing';
import { BusinessProductService } from './business-product.service';

describe('BusinessProductService', () => {
  let service: BusinessProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusinessProductService],
    }).compile();

    service = module.get<BusinessProductService>(BusinessProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
