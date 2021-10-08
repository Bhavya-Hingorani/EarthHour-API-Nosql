/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Delete, Body, Param, Put } from '@nestjs/common';
import { CreateThreadsDto } from 'src/eathHour/dto/createThreads.dto';
import { ThreadsService } from './threads.service';
import{Thread} from 'src/eathHour/interfaces/thread.interface';

@Controller('threads')
    export class ThreadsController {
    constructor( private readonly threadsService: ThreadsService){}
    
    @Post()
    createForum(@Body() createThreadsDto: CreateThreadsDto): Promise<Thread> {
        return this.threadsService.addThread(createThreadsDto);
    }
    
    @Put(':id')
    async updateThread(@Param() param, @Body() createThreadsDto: CreateThreadsDto): Promise<Thread> {
        return await this.threadsService.updateThread(param.id, createThreadsDto);
    }

    @Get(':id')
    getThread(@Param() param):Thread {
        return this.threadsService.getParticularThread(param.id);
    }


    @Get()
    getThreadfromThreadId(@Body() createThreadsDto: CreateThreadsDto):Thread[] {
        return this.threadsService.getAllThreads(createThreadsDto.threadId);
    }

    @Delete(':id')
    deleteForum(@Param() param) {
        return this.threadsService.deleteThread(param.id);
    }

}