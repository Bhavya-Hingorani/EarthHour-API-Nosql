import { Test, TestingModule } from '@nestjs/testing';
import { SubForumsController } from './sub-forums.controller';

describe('SubForumsController', () => {
  let controller: SubForumsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubForumsController],
    }).compile();

    controller = module.get<SubForumsController>(SubForumsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
