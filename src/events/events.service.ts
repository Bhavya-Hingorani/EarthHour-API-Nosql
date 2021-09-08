import { Injectable } from '@nestjs/common';
import { Event } from 'src/eathHour/interfaces/event.interface';

@Injectable()
export class EventsService {
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
