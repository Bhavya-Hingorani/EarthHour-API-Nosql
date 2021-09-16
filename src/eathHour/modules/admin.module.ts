/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminController } from 'src/admin/admin.controller';
import { AdminService } from 'src/admin/admin.service';
import { AdminSchema } from '../schemas/admin.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'admin', schema: AdminSchema}])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
