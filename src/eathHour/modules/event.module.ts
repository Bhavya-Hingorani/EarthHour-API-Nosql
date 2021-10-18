/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsController } from 'src/events/events.controller';
import { EventsService } from 'src/events/events.service';
import { EventSchema } from '../schemas/event.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'events', schema: EventSchema}])],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventModule {}
