/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from 'src/eathHour/interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('user') public readonly userModel: Model<User>) {}

  async updateUser(id: string, updatedUser: User): Promise<User>{
    return await this.userModel.findByIdAndUpdate(id, updatedUser, {new: false});
  }
  async getAllUsers(): Promise<User[]>{
    return await this.userModel.find();
  }
  async getParticularUser(id: string): Promise<User> {
    return await this.userModel.findOne({ _id: id });
  }

  async addUser(user: User): Promise<User>{
    const newUser = new this.userModel(user);
    return await newUser.save(); 
  }
}
