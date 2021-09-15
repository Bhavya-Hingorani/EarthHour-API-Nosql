/* eslint-disable prettier/prettier */
import { Controller, Get, Delete, Post, Body, Param, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/eathHour/dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from 'src/eathHour/interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getAllUsers():Promise<User[]>{
    return await this.userService.getAllUsers();
  }
  @Get(':id')
  async getUser(@Param() param): Promise<User> {
    return await this.userService.getParticularUser(param.id);
  }

  @Post()
  async createUser(@Body() createItemDto: CreateUserDto): Promise<User> {
    return await this.userService.addUser(createItemDto);
  }

  @Put(':id')
  async updateUser(@Param() param, @Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.updateUser(param.id, createUserDto);
  }
}
