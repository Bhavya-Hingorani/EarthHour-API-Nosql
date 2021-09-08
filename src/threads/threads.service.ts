import { Injectable } from '@nestjs/common';
import { Thread } from 'src/eathHour/interfaces/thread.inteface';

@Injectable()
export class ThreadsService {
  private readonly threads: Thread[] = [
    {
      threadId: '123',
      subForumId: '22446688',
      userId: '69',
      upvotes: 44,
      threadTitle: 'Why dont we just ban plastic',
      threadBody: 'Pastic is a very big problem so lets just ban it 🥴',
      threadAttachment:
        'https://thumbs.dreamstime.com/b/plastic-bag-9659043.jpg',
    },
  ];

  getAllThreads(id: string): Thread[] {
    return this.threads.filter((thread) => thread.subForumId === id);
  }

  getParticularThread(id: string): Thread {
    return this.threads.find((thread) => thread.threadId === id);
  }
}
