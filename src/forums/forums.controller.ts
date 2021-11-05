/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Delete, Param, Body, Put } from '@nestjs/common';
import { CreateForumDto } from 'src/eathHour/dto/create-forum.dto';
import { ForumsService } from './forums.service';
import { SubForumsService } from 'src/sub-forums/sub-forums.service';
import { Forum } from 'src/eathHour/interfaces/forum.interface';
@Controller('forums')
export class ForumsController {
  constructor(private readonly forumsService: ForumsService){}

  @Post()
  createForum(@Body() createForumDto: CreateForumDto): Promise<Forum> {
    return this.forumsService.addForum(createForumDto);
  }

  @Put(':id')
  async updateUser(@Param() param, @Body() createUserDto: CreateForumDto): Promise<Forum> {
    return await this.forumsService.updateForum(param.id, createUserDto);
  }

  @Get(':id')
  getForum(@Param() param): Promise<Forum> {
    return this.forumsService.getParticularForum(param.id);
  }

  @Get()
  getAllForums(): Promise<Forum[]> {
    return this.forumsService.getAllForums();
  }

  @Delete(':id')
  deleteForum(@Param() param) {
    return this.forumsService.deleteForum(param.id);
  }
  //this.subForumsService.deleteAllSubForums(param.id)
}
