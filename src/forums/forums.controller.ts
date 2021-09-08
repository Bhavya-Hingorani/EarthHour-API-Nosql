/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { CreateForumDto } from 'src/eathHour/dto/create-forum.dto';
import { ForumsService } from './forums.service';
import { Forum } from 'src/eathHour/interfaces/forum.interface';
@Controller('forums')
export class ForumsController {
  constructor(private readonly forumsService: ForumsService){}


  @Post()
  createForum(@Body() createForumDto: CreateForumDto): string {
    return `name: ${createForumDto.forumName}`;
  }

  @Get(':id')
  getForum(@Param() param): Forum {
    return this.forumsService.getParticularForum(param.id);
  }

  @Delete(':id')
  deleteForum(@Param() param) {
    return `id: ${param.id}`;
  }
}
