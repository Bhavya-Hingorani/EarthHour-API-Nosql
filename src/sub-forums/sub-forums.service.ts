import { Injectable } from '@nestjs/common';
import { subForum } from 'src/eathHour/interfaces/subForum.interface';

@Injectable()
export class SubForumsService {
  private readonly subForums: subForum[] = [
    {
      subForumId: '22446688',
      forumId: '555',
      subForumTitle: 'Help! I cant stop masturbating to plastic barbie dolls',
      subForumDescription:
        'I stated watching barbie when I was 8yo. Ever since I discovered my sister barbie doll collection at the ripe age of 3, I have been obsessed 🥺',
    },
    {
      subForumId: '1133557799',
      forumId: '555',
      subForumTitle: 'Eco terrorism',
      subForumDescription: 'I became a part treeliban',
    },
  ];

  getAllSubFoumsOfForum(id: string): subForum[] {
    return this.subForums.filter((subForum) => subForum.forumId === id);
  }

  getParticularSubForum(id: string): subForum {
    return this.subForums.find((subForum) => subForum.subForumId === id);
  }

  isGreaterThanFive(x) {
    return x > 5;
  }
}
