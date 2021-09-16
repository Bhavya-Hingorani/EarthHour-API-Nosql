/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ForumsController } from 'src/forums/forums.controller';
import { ForumsService } from 'src/forums/forums.service';
import { ForumSchema } from '../schemas/forum.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'forum', schema: ForumSchema}])],
  controllers: [ForumsController],
  providers: [ForumsService],
})
export class ForumModule {}
