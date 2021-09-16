/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './eathHour/modules/users.module';
import { ForumModule } from './eathHour/modules/forum.module';
import { SubForumModule } from './eathHour/modules/sub-forum.module';
import { AdminModule } from './eathHour/modules/admin.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { ThreadsController } from './threads/threads.controller';
import { ThreadsService } from './threads/threads.service';
import { SubThreadsController } from './sub-threads/sub-threads.controller';
import { EventsController } from './events/events.controller';
import { OrganizationController } from './organizations/organizations.controller';
import { SubThreadsService } from './sub-threads/sub-threads.service';
import { EventsService } from './events/events.service';
import { OrganizationsService } from './organizations/organizations.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from 'src/config/keys';
import { AdminService } from './admin/admin.service';
@Module({
  imports: [UserModule, ForumModule, SubForumModule, AdminModule, MongooseModule.forRoot(config.mongoUri)],
  controllers: [AppController, ThreadsController, SubThreadsController, EventsController, OrganizationController],
  providers: [AppService, ThreadsService, SubThreadsService, EventsService, OrganizationsService],
})
export class AppModule {}
