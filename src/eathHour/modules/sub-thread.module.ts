/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubThreadsController } from 'src/sub-threads/sub-threads.controller';
import { SubThreadsService } from 'src/sub-threads/sub-threads.service';
import { SubThreadsSchema } from '../schemas/sub-threads.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'subThread', schema: SubThreadsSchema}])],
  controllers: [SubThreadsController],
  providers: [SubThreadsService],
})
export class SubThreadsModule {}
