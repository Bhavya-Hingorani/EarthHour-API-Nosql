import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { AdminController } from './admin/admin.controller';
import { ForumsController } from './forums/forums.controller';
import { SubForumsController } from './sub-forums/sub-forums.controller';
import { ThreadsController } from './threads/threads.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, AdminController, ForumsController, SubForumsController, ThreadsController],
  providers: [AppService],
})
export class AppModule {}
