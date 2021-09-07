import { Test, TestingModule } from '@nestjs/testing';
import { SubForumsService } from './sub-forums.service';

describe('SubForumsService', () => {
  let service: SubForumsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubForumsService],
    }).compile();

    service = module.get<SubForumsService>(SubForumsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
