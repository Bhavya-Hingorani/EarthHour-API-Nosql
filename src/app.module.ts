import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { AdminController } from './admin/admin.controller';
import { ForumsController } from './forums/forums.controller';
import { SubForumsController } from './sub-forums/sub-forums.controller';
import { ThreadsController } from './threads/threads.controller';
import { UsersService } from './users/users.service';
import { ForumsService } from './forums/forums.service';
import { SubForumsService } from './sub-forums/sub-forums.service';
import { ThreadsService } from './threads/threads.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, AdminController, ForumsController, SubForumsController, ThreadsController],
  providers: [AppService, UsersService, ForumsService, SubForumsService, ThreadsService],
})
export class AppModule {}
