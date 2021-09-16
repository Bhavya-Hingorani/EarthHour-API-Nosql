/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { subForum } from 'src/eathHour/interfaces/subForum.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class SubForumsService {
  constructor(@InjectModel('subForum') public readonly subForumModel: Model<subForum>) {}

  private readonly subForums: subForum[] = [
    {
      forumId: '555',
      subForumTitle: 'Help! I cant stop masturbating to plastic barbie dolls',
      subForumDescription:
        'I stated watching barbie when I was 8yo. Ever since I discovered my sister barbie doll collection at the ripe age of 3, I have been obsessed 🥺',
    },
    {
      forumId: '555',
      subForumTitle: 'Eco terrorism',
      subForumDescription: 'I became a part treeliban',
    },
  ];

  async updateSubForum(id: string, updatedSubForum: subForum): Promise<subForum>{
    return await this.subForumModel.findByIdAndUpdate(id, updatedSubForum);
  }
  async getAllSubForums(): Promise<subForum[]>{
    return this.subForumModel.find();
  }
  async getParticularSubForum(id: string): Promise<subForum> {
    return this.subForumModel.findOne({ _id: id });
  }

  async addSubForum(forum: subForum): Promise<subForum>{
    const newForum = new this.subForumModel(forum);
    return newForum.save(); 
  }

  async deleteSubForum(id: string): Promise<subForum>{
    return await this.subForumModel.findByIdAndDelete(id);
  }

  async getAllSubForumsByForumId(id: string): Promise<subForum[]>{
    return this.subForumModel.find({forumId: id });
  }
}
