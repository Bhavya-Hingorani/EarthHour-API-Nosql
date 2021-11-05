/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostUserController } from 'src/post-user/post-user.controller';
import { PostUserService } from 'src/post-user/post-user.service';
import { PostUser } from '../entities/post-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostUser])],
  providers: [PostUserService],
  controllers: [PostUserController],
})
export class PostUserModule {}
