import { Injectable } from '@nestjs/common';
import { Admin } from 'src/eathHour/interfaces/admin.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AdminService {
  constructor(@InjectModel('admin') public readonly adminModel: Model<Admin>) {}

  async addAdmin(admin: Admin): Promise<Admin> {
    const newadmin = new this.adminModel(admin);
    return newadmin.save();
  }

  async getParticularAdmin(id: string): Promise<Admin> {
    return this.adminModel.findOne({ _id: id });
  }

  async deleteAdmin(id: string): Promise<Admin> {
    return await this.adminModel.findByIdAndDelete(id);
  }
}
