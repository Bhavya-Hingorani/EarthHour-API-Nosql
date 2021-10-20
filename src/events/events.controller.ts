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
    async updateEvent(@Param() param, @Body() createEventDto: CreateEventDto): Promise<Event> {
      return await this.eventService.updateEvent(param.id, createEventDto);
    }

    @Get()
    async getAllEvents():Promise<Event[]>{
      return await this.eventService.getAllEvents();
    }

    //get event by id
    @Get(':id')
    async getParticularEvent(@Param() param): Promise<Event> {
      return await this.eventService.getParticularEvent(param.id);
    }

    //get all events of user
    @Get(':id')
    async getAllEventsOfUser(@Param() param): Promise<Event[]> {
      return await this.eventService.getAllEventsOfUser(param.id);
    }

    //get all events of org
    @Get(':id')
    async getAllEventsOfOrg(@Param() param): Promise<Event[]> {
      return await this.eventService.getAllEventsOfOrg(param.id);
    }
  
    @Delete(':id')
    deleteEvent(@Param() param) {
      return `id: ${param.id}`;
    }


}
