/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubForumsController } from 'src/sub-forums/sub-forums.controller';
import { SubForumsService } from 'src/sub-forums/sub-forums.service';
import { SubForumSchema } from '../schemas/sub-forum.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'subForum', schema: SubForumSchema}])],
  controllers: [SubForumsController],
  providers: [SubForumsService],
})
export class SubForumModule {}
