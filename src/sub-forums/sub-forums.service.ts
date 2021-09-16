/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { subForum } from 'src/eathHour/interfaces/subForum.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class SubForumsService {
  constructor(@InjectModel('subForum') public readonly subForumModel: Model<subForum>) {}

  async updateSubForum(id: string, updatedSubForum: subForum): Promise<subForum>{
    return await this.subForumModel.findByIdAndUpdate(id, updatedSubForum);
  }
  async getAllSubForums(): Promise<subForum[]>{
    return this.subForumModel.find();
  }
  async getParticularSubForum(id: string): Promise<subForum> {
    return this.subForumModel.findOne({ _id: id });
  }

  async addSubForum(subForum: subForum): Promise<subForum>{
    const newSubForum = new this.subForumModel(subForum);
    return newSubForum.save(); 
  }

  async deleteSubForum(id: string): Promise<subForum>{
    return await this.subForumModel.findByIdAndDelete(id);
  }

  async getAllSubForumsByForumId(id: string): Promise<subForum[]>{
    return this.subForumModel.find({forumId: id });
  }
}
