import { Injectable } from '@nestjs/common';
import { User } from 'src/eathHour/interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('user') public readonly userModel: Model<User>) {}

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

  async getParticularUser(id: string): Promise<User> {
    return this.userModel.findOne({ _id: id });
  }
}
