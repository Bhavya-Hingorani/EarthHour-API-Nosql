import { Injectable } from '@nestjs/common';
import { SubThread } from 'src/eathHour/interfaces/subThread.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SubThreadsService {
  constructor(@InjectModel('subThread') public readonly subThreadModel: Model<SubThread>) {}

  // private readonly subThreads: SubThread[] = [
  //   {
  //     subThreadId: '98',
  //     threadId: '123',
  //     userId: '420',
  //     upvotes: 120,
  //     subThreadBody: 'You dont know man you are naive',
  //   },
  // ];

  async createSubThread(subThread: SubThread): Promise<SubThread>{
    const newSubThread = new this.subThreadModel(subThread);
    return await newSubThread.save(); 
  }

  async getAllSubThreads(): Promise<SubThread[]>{
    return await this.subThreadModel.find();
  }

  async getParticularSubThread(id: string): Promise<SubThread> {
    return await this.subThreadModel.findOne({ subThreadId: id });
  }

  async updateSubThread(id: string, updatedSubThread: SubThread): Promise<SubThread>{
    return await this.subThreadModel.findByIdAndUpdate(id, updatedSubThread);
  }

  async getAllSubThreadsByThreadId(id: string): Promise<SubThread[]>{
    return this.subThreadModel.find({threadId: id });
  }

  async deleteSubThread(id: string): Promise<SubThread>{
    return await this.subThreadModel.findByIdAndDelete(id);
  }
  
   async deleteAllSubThreadsFromThreadId(id: string): Promise<SubThread[]>{
     const deleteAllSubThreads = this.subThreadModel.find({threadId: id});
     return await deleteAllSubThreads.deleteMany({});
   }
}
