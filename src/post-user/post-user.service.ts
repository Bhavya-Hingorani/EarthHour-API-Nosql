import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostUser } from 'src/eathHour/entities/post-user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostUserService {
  constructor(
    @InjectRepository(PostUser)
    private postUserRepository: Repository<PostUser>,
  ) {}

  addUser(id: number): Promise<PostUser> {
    return this.postUserRepository.save({ id });
  }
}
