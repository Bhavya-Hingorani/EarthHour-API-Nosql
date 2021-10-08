import { Injectable } from '@nestjs/common';
import { Thread } from 'src/eathHour/interfaces/thread.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class ThreadsService {
  constructor(@InjectModel('threads') public readonly ThreadModel: Model<Thread>) {}

  private readonly threads: Thread[] = [
    {
      threadId: '123',
      subForumId: '22446688',
      userId: '69',
      upvotes: 44,
      threadTitle: 'Why dont we just ban plastic',
      threadBody: 'Toh tu metal ki baatli leke ghumega? 🥴',
      threadAttachment:
        'https://thumbs.dreamstime.com/b/plastic-bag-9659043.jpg',
    },
  ];

  async addThread(thread: Thread): Promise<Thread>{
    const newThread = new this.ThreadModel(thread);
    return newThread.save(); 
  }

  async updateThread(id: string, updatedThread: Thread): Promise<Thread>{
    return await this.ThreadModel.findByIdAndUpdate(id, updatedThread);
  }

  getAllThreads(id: string): Thread[] {
    return this.threads.filter((thread) => thread.threadId === id);
  }

  getParticularThread(id: string): Thread {
    return this.threads.find((thread) => thread.threadId === id);
  }

  async deleteThread(id: string): Promise<Thread>{
    return await this.ThreadModel.findByIdAndDelete(id);
  }
}
