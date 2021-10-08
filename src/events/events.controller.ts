import { Controller , Post, Get,Put, Delete, Param, Body} from '@nestjs/common';
import { CreateEventDto } from 'src/eathHour/dto/createEvents.dto';
import { EventsService } from './events.service';
import { Event } from 'src/eathHour/interfaces/event.interface';

@Controller('events')
export class EventsController {
    constructor(private readonly eventService:EventsService ){}

    @Post()
    createEvent(@Body() createEventDto: CreateEventDto): string{
        return `name: ${createEventDto.eventTitle}`;
    }

    @Put(':id')
    async updateUser(@Param() param, @Body() createEventDto: CreateEventDto): Promise<Event> {
      return await this.eventService.updateEvent(param.id, createEventDto);
    }

    @Get(':id')
    getEvent(@Param() param): Event {
      return this.eventService.getParticularEvent(param.id);
    }

    //get all events of user
    //get all events of org
  
    @Delete(':id')
    deleteEvent(@Param() param) {
      return `id: ${param.id}`;
    }


}
