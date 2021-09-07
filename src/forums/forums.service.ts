import { Injectable } from '@nestjs/common';
import { Forum } from 'src/eathHour/interfaces/forum.interface';

@Injectable()
export class ForumsService {
  private readonly forums: Forum[] = [
    {
      forumId: '555',
      forumName: 'water conservation',
      usernameOfCreator: 'queenSris',
      forumPic:
        'https://upload.wikimedia.org/wikipedia/commons/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg',
    },
  ];

  getParticularForum(id: string): Forum {
    return this.forums.find((forum) => forum.forumId === id);
  }
}
