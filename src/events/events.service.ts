import { Injectable } from '@nestjs/common';
import { Event } from 'src/eathHour/interfaces/event.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EventsService {
  constructor(@InjectModel('events') public readonly eventModel: Model<Event>) {}


  async createEvent(event: Event): Promise<Event>{
    const newEvent = new this.eventModel(event);
    return await newEvent.save(); 
  }

  async updateEvent(id: string, updatedEvent: Event): Promise<Event>{
    return await this.eventModel.findByIdAndUpdate(id, updatedEvent);
  }

  async getAllEvents(): Promise<Event[]>{
    return await this.eventModel.find();
  }

  async getParticularEvent(id: string): Promise<Event> {
    return await this.eventModel.findOne({ _id: id });
  }

  async getAllEventsOfUser(id: string): Promise<Event[]> {
    return await this.eventModel.find({_id:id});
    //filter((event) => event.orgIdOfCreator === id)
  }

  async getAllEventsOfOrg(id: string): Promise<Event[]> {
    return await this.eventModel.find({_id:id});
    //filter((event) => event.orgIdOfCreator === id)
  }

  async deleteParticularEvent(id: string): Promise<Event>{
    return await this.eventModel.findByIdAndDelete(id);
  }
  
}
