import { Controller , Post, Get, Delete, Param, Body} from '@nestjs/common';
import { CreateEventDto } from 'src/eathHour/dto/createEvents.dto';
import { EventsService } from './events.service';
import { Event } from 'src/eathHour/interfaces/event.interface';

@Controller('events')
export class EventsController {
    constructor(private readonly eventService:EventsService ){}

    @Post()
    createEvent(@Body() createEventDto: CreateEventDto): string{
        return `name: ${createEventDto.eventName}`;
    }

    @Get(':id')
    getEvent(@Param() param): Event {
      return this.eventService.getParticularEvent(param.id);
    }
  
    @Delete(':id')
    deleteEvent(@Param() param) {
      return `id: ${param.id}`;
    }


}
