import { Controller , Post, Get,Put, Delete, Param, Body} from '@nestjs/common';
import { SubThreadsService } from './sub-threads.service';
import { CreateSubThreadsDto } from 'src/eathHour/dto/create-sub-thread.dto';
import { GetSubThreadsDto } from 'src/eathHour/dto/get-sub-threads.dto';
import { SubThread } from 'src/eathHour/interfaces/subThread.interface';
@Controller('sub-threads')
export class SubThreadsController {
    constructor(private readonly subThreadsService: SubThreadsService ){}

    @Post()
    createSubThread(@Body() createSubThreadsDto: CreateSubThreadsDto): string{
        return `Body: ${createSubThreadsDto.subThreadBody}`;
    }

    @Get(':id')
    getSubThread(@Param() param): SubThread[] {
      return this.subThreadsService.getAllSubThreads(param.id);
    }
    

    @Put(':id')
    async updateSubThread(@Param() param, @Body() createSubThreadDto: CreateSubThreadsDto): Promise<SubThread> {
      return await this.subThreadsService.updateSubThread(param.id, createSubThreadDto);
    }

    @Get()
    getSubThreadsFromThreadId(@Body() getSubThreadsDto: GetSubThreadsDto): Promise<SubThread[]> {
      return this.subThreadsService.getAllSubThreadsByThreadId(getSubThreadsDto.threadId);
    }
    

    @Delete(':id')
    deleteSubThread(@Param() param) {
      return `id: ${param.id}`;
    }
}
