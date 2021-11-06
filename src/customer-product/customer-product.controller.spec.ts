import { Test, TestingModule } from '@nestjs/testing';
import { CustomerProductController } from './customer-product.controller';

describe('CustomerProductController', () => {
  let controller: CustomerProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerProductController],
    }).compile();

    controller = module.get<CustomerProductController>(CustomerProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
