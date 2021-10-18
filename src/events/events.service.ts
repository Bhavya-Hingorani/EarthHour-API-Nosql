import { Injectable } from '@nestjs/common';
import { Event } from 'src/eathHour/interfaces/event.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EventsService {
  constructor(@InjectModel('events') public readonly eventModel: Model<Event>) {}

  private readonly events: Event[] = [
    {
      eventId: '99',
      eventTitle: 'Cleaning the varsova beach',
      eventDescription: 'We are going to clean the beach on 09-09-21',
      eventImage:
        'https://mumbaitourism.travel/images/places-to-visit/headers/versova-beach-mumbai-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg',
      orgIdOfCreator: '69',
      numberOfUsersIn: 16,
    },
  ];

  async updateEvent(id: string, updatedEvent: Event): Promise<Event>{
    return await this.eventModel.findByIdAndUpdate(id, updatedEvent);
  }

  getAllEvents(): Event[] {
    return this.events;
  }

  getParticularEvent(id: string): Event {
    return this.events.find((event) => event.eventId === id);
  }

  getAllEventsOfUser(id: string): Event[] {
    return this.events.filter((event) => event.orgIdOfCreator === id);
  }
}
