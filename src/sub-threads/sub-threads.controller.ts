import { Controller , Post, Get, Delete, Param, Body} from '@nestjs/common';
import { SubThreadsService } from './sub-threads.service';
import { CreateSubThreadsDto } from 'src/eathHour/dto/create-sub-thread.dto';
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
  
    @Delete(':id')
    deleteSubThread(@Param() param) {
      return `id: ${param.id}`;
    }
}
