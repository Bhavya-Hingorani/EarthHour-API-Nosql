import { Test, TestingModule } from '@nestjs/testing';
import { SubThreadsService } from './sub-threads.service';

describe('SubThreadsService', () => {
  let service: SubThreadsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubThreadsService],
    }).compile();

    service = module.get<SubThreadsService>(SubThreadsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
