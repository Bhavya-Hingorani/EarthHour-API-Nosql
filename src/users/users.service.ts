import { Injectable } from '@nestjs/common';
import { User } from 'src/eathHour/interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: '69',
      userName: 'queenSris',
      email: 'callMeAPlant@gmail.com',
      password: 'ILoveKarasunoo',
    },
    {
      userId: '420',
      userName: 'chutiyaAmit',
      email: 'MrKnowItAll@gmail.com',
      password: 'youAreJustNaiveMan',
    },
  ];

  getParticularUser(id: string): User {
    return this.users.find((user) => user.userId === id);
  }
}
