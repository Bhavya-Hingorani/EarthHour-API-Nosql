import { Controller, Get, Delete, Post, Body, Param } from '@nestjs/common';
import { CreateItemDto } from 'src/eathHour/dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from 'src/eathHour/interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get(':id')
  async getUser(@Param() param): Promise<User> {
    return await this.userService.getParticularUser(param.id);
  }

  @Post()
  createUser(@Body() createItemDto: CreateItemDto): string {
    return `name: ${createItemDto.userName}`;
  }
}
