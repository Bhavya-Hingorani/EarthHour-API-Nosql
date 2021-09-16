/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Forum } from 'src/eathHour/interfaces/forum.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { subForum } from 'src/eathHour/interfaces/subForum.interface';

@Injectable()
export class ForumsService {
  constructor(@InjectModel('forum') public readonly forumModel: Model<Forum>) {}

  async updateForum(id: string, updatedForum: Forum): Promise<Forum>{
    return await this.forumModel.findByIdAndUpdate(id, updatedForum);
  }
  async getAllForums(): Promise<Forum[]>{
    return this.forumModel.find();
  }
  async getParticularForum(id: string): Promise<Forum> {
    return this.forumModel.findOne({ _id: id });
  }

  async addForum(forum: Forum): Promise<Forum>{
    const newForum = new this.forumModel(forum);
    return newForum.save(); 
  }

  async deleteForum(id: string): Promise<Forum>{
    return await this.forumModel.findByIdAndDelete(id);
  }
}
