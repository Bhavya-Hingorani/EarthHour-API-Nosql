import { Injectable } from '@nestjs/common';
import { Thread } from 'src/eathHour/interfaces/thread.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class ThreadsService {
  constructor(@InjectModel('threads') public readonly ThreadModel: Model<Thread>) {}

  async addThread(thread: Thread): Promise<Thread>{
    const newThread = new this.ThreadModel(thread);
    return newThread.save(); 
  }

  async updateThread(id: string, updatedThread: Thread): Promise<Thread>{
    return await this.ThreadModel.findByIdAndUpdate(id, updatedThread);
  }

  async getThreadsfromSubForumId(id: string): Promise<Thread[]>{
    return await this.ThreadModel.find({subForumId:id});
  }

  async getParticularThread(id: string): Promise<Thread> {
    return this.ThreadModel.findOne({_id: id });
  }

  async deleteThread(id: string): Promise<Thread>{
    return await this.ThreadModel.findByIdAndDelete(id);
  }
}
