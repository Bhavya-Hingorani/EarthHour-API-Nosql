/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Delete, Body, Param, Put } from '@nestjs/common';
import { CreateSubForumDto } from 'src/eathHour/dto/create-sub-forums.dto';
import { GetSubForumsDto } from 'src/eathHour/dto/get-sub-forums.dto';
import { SubForumsService } from './sub-forums.service';
import { subForum } from 'src/eathHour/interfaces/subForum.interface';

@Controller('sub-forums')
export class SubForumsController {
    constructor( private readonly subForumService: SubForumsService){}

  @Post()
  createSubForum(@Body() createSubForumDto: CreateSubForumDto): Promise<subForum> {
    console.log(createSubForumDto instanceof CreateSubForumDto)
    
    return this.subForumService.addSubForum(createSubForumDto);
  }

  @Put(':id')
  async updateSubForum(@Param() param, @Body() createSubForumDto: CreateSubForumDto): Promise<subForum> {
    return await this.subForumService.updateSubForum(param.id, createSubForumDto);
  }

  @Get(':id')
  getSubForum(@Param() param):Promise<subForum> {
    return this.subForumService.getParticularSubForum(param.id);
  }

  @Get()
  getSubForumsFromForumId(@Body() getSubForumsDto: GetSubForumsDto): Promise<subForum[]> {
    return this.subForumService.getAllSubForumsByForumId(getSubForumsDto.forumId);
  }

  @Delete(':id')
  deleteSubForum(@Param() param) {
    return `id: ${param.id}`;
  }

  @Delete(':id')
  deleteAllSubForums(@Param() param) {
    return `id: ${param.id}`;
  }

}
