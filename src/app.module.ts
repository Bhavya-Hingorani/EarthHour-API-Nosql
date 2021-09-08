/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './eathHour/modules/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { ForumsController } from './forums/forums.controller';
import { SubForumsController } from './sub-forums/sub-forums.controller';
import { ThreadsController } from './threads/threads.controller';
import { ForumsService } from './forums/forums.service';
import { SubForumsService } from './sub-forums/sub-forums.service';
import { ThreadsService } from './threads/threads.service';
import { SubThreadsController } from './sub-threads/sub-threads.controller';
import { EventsController } from './events/events.controller';
import { OrganizationController } from './organizations/organizations.controller';
import { SubThreadsService } from './sub-threads/sub-threads.service';
import { EventsService } from './events/events.service';
import { OrganizationsService } from './organizations/organizations.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from 'src/config/keys';
import { UsersService } from './users/users.service';
@Module({
  imports: [MongooseModule.forRoot(config.mongoUri)],
  controllers: [AppController, AdminController, ForumsController, SubForumsController, ThreadsController, SubThreadsController, EventsController, OrganizationController],
  providers: [AppService, ForumsService, SubForumsService, ThreadsService, SubThreadsService, EventsService, OrganizationsService],
})
export class AppModule {}
