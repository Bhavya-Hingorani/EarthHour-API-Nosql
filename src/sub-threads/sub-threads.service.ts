import { Injectable } from '@nestjs/common';
import { SubThread } from 'src/eathHour/interfaces/subThread.interface';

@Injectable()
export class SubThreadsService {
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
    return this.subThreads.filter((subThread) => subThread.threadId === id);
  }

  getparticularThread(id: string): SubThread {
    return this.subThreads.find((subThread) => subThread.subThreadId === id);
  }
}
