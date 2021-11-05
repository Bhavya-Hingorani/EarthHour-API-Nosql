import { Test, TestingModule } from '@nestjs/testing';
import { BusinessProductController } from './business-product.controller';

describe('BusinessProductController', () => {
  let controller: BusinessProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessProductController],
    }).compile();

    controller = module.get<BusinessProductController>(BusinessProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
