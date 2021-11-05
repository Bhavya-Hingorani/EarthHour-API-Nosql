import { Test, TestingModule } from '@nestjs/testing';
import { PostUserService } from './post-user.service';

describe('PostUserService', () => {
  let service: PostUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostUserService],
    }).compile();

    service = module.get<PostUserService>(PostUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
