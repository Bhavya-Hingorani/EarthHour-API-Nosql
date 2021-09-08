/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { CreateSubForumDto } from 'src/eathHour/dto/create-sub-forums.dto';
import { GetSubForumsDto } from 'src/eathHour/dto/get-sub-forums.dto';
import { SubForumsService } from './sub-forums.service';
import { subForum } from 'src/eathHour/interfaces/subForum.interface';

@Controller('sub-forums')
export class SubForumsController {
    constructor( private readonly subForumService: SubForumsService){}

  @Post()
  createSubForum(@Body() createForumDto: CreateSubForumDto): string {
    return `name: ${CreateSubForumDto}`;
  }

  @Get(':id')
  getSubForum(@Param() param):subForum {
    return this.subForumService.getParticularSubForum(param.id);
  }

  @Get()
  getSubForumsFromForumId(@Body() getSubForumsDto: GetSubForumsDto):subForum[] {
    return this.subForumService.getAllSubFoumsOfForum(getSubForumsDto.forumId);
  }

  @Delete(':id')
  deleteSubForum(@Param() param) {
    return `id: ${param.id}`;
  }
}
