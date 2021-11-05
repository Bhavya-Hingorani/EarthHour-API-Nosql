/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { UserModule } from './eathHour/modules/users.module';
import { ThreadModule } from './eathHour/modules/thread.module';
import { SubThreadsModule } from './eathHour/modules/sub-thread.module';
import { EventModule } from './eathHour/modules/event.module';
import { ForumModule } from './eathHour/modules/forum.module';
import { OrganizationModule } from './eathHour/modules/organization.module';
import { SubForumModule } from './eathHour/modules/sub-forum.module';
import { AdminModule } from './eathHour/modules/admin.module';

import { BusinessProductModule } from './eathHour/modules/business-product.module';

import { BusinessProduct } from './eathHour/entities/business-product.entity';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BusinessProductController } from './business-product/business-product.controller';
import { BusinessProductService } from './business-product/business-product.service';
import { PostUserController } from './post-user/post-user.controller';
import { PostUserService } from './post-user/post-user.service';

import config from 'src/config/keys';
@Module({
  imports: [UserModule, ForumModule,SubForumModule, AdminModule, OrganizationModule,EventModule, ThreadModule,SubThreadsModule,BusinessProductModule,MongooseModule.forRoot(config.mongoUri), 
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'earthHour',
    entities: [BusinessProduct],
    synchronize: true,
  }),],
  controllers: [AppController, PostUserController],
  providers: [AppService, PostUserService],
})
export class AppModule {}
