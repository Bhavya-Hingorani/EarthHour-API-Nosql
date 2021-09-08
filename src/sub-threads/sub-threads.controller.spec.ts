import { Test, TestingModule } from '@nestjs/testing';
import { SubThreadsController } from './sub-threads.controller';

describe('SubThreadsController', () => {
  let controller: SubThreadsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubThreadsController],
    }).compile();

    controller = module.get<SubThreadsController>(SubThreadsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
