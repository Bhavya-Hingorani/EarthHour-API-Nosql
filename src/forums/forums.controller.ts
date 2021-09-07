import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { CreateForumDto } from 'src/eathHour/dto/create-forum.dto';


@Controller('forums')
export class ForumsController {
    @Post()
    createForum(@Body() createForumDto: CreateForumDto): string {
    return `name: ${createForumDto.forumName}`;
  }

    @Get(':id')
    getForum(@Param() param){
      return `id: ${param.id}`;
    }

    @Delete(':id')
    deleteForum(@Param() param){
      return `id: ${param.id}`;
    }
}
