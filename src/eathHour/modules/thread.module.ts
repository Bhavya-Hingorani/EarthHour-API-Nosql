/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ThreadsController } from 'src/threads/threads.controller';
import { ThreadsService } from 'src/threads/threads.service';
import { ThreadsSchema } from '../schemas/thread.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'threads', schema: ThreadsSchema}])],
  controllers: [ThreadsController],
  providers: [ThreadsService],
})
export class ThreadModule {}
