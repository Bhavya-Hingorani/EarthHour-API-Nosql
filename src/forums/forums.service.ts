/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Forum } from 'src/eathHour/interfaces/forum.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ForumsService {
  constructor(@InjectModel('forum') public readonly forumModel: Model<Forum>) {}

  private readonly forums: Forum[] = [
    {
      forumName: 'water conservation',
      creatorId: '69',
      forumPic:
        'https://upload.wikimedia.org/wikipedia/commons/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg',
    },
  ];

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
