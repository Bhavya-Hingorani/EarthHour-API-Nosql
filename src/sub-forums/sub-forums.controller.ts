import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import{ CreateSubForumDto } from 'src/eathHour/dto/create-sub-forums.dto'

@Controller('sub-forums')
export class SubForumsController {
    
    @Post()
    createSubForum(@Body() createForumDto: CreateSubForumDto): string {
        return `name: ${CreateSubForumDto}` ;
    }

    @Get(':id')
    getSubForum(@Param() param){
        return `id: ${param.id}`;
    }

    @Delete(':id')
    deleteSubForum(@Param() param){
        return `id: ${param.id}`;
    }
    
}
