/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { AdminDto } from 'src/eathHour/dto/admin.dto';
import { Admin } from 'src/eathHour/interfaces/admin.interface';
import { AdminService } from './admin.service';
@Controller('admin')
export class AdminController {
  constructor( private readonly adminService: AdminService){}

  @Post()
  createSubForum(@Body() adminDto: AdminDto): Promise<Admin> {
    return this.adminService.addAdmin(adminDto);
  }

  @Get(':id')
  getParticularAdmin(@Param() param): Promise<Admin>{
    return this.adminService.getParticularAdmin(param.id);
  }

  @Delete(':id')
  deleteAdmin(@Param() param): Promise<Admin>{
    return this.adminService.deleteAdmin(param.id);
  }
}