import { Injectable } from '@nestjs/common';
import { SubThread } from 'src/eathHour/interfaces/subThread.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SubThreadsService {
  constructor(@InjectModel('subThread') public readonly subThreadModel: Model<SubThread>) {}

  private readonly subThreads: SubThread[] = [
    {
      subThreadId: '98',
      threadId: '123',
      userId: '420',
      upvotes: 120,
      subThreadBody: 'You dont know man you are naive',
    },
  ];

  getAllSubThreads(id: string): SubThread[] {
    return this.subThreads.filter((subThread) => subThread.subThreadId === id);
  }

  async updateSubThread(id: string, updatedSubThread: SubThread): Promise<SubThread>{
    return await this.subThreadModel.findByIdAndUpdate(id, updatedSubThread);
  }

  async getAllSubThreadsByThreadId(id: string): Promise<SubThread[]>{
    return this.subThreadModel.find({threadId: id });
  }

  getparticularThread(id: string): SubThread {
    return this.subThreads.find((subThread) => subThread.subThreadId === id);
  }
}
