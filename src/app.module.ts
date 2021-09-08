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
import { SubThreadsController } from './sub-threads/sub-threads.controller';
import { EventsController } from './events/events.controller';
import { OrganizationsController } from './organizations/organizations.controller';
import { SubThreadsService } from './sub-threads/sub-threads.service';
import { EventsService } from './events/events.service';
import { OrganizationService } from './organization/organization.service';
import { OrganizationsService } from './organizations/organizations.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, AdminController, ForumsController, SubForumsController, ThreadsController, SubThreadsController, EventsController, OrganizationsController],
  providers: [AppService, UsersService, ForumsService, SubForumsService, ThreadsService, SubThreadsService, EventsService, OrganizationService, OrganizationsService],
})
export class AppModule {}
