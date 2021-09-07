import { Controller, Get, Delete, Post, Body, Param } from '@nestjs/common';
import { CreateItemDto } from 'src/eathHour/dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Get(':id')
  getUser(@Param() param): string {
    return `User : ${param.id}`;
  }

  @Post()
  createUser(@Body() createItemDto: CreateItemDto): string {
    return `name: ${createItemDto.userName}`;
  }
}
