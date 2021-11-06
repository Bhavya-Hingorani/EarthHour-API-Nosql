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
import { PostUserModule } from './eathHour/modules/post-user.module';
import { CustomerProductModule } from './eathHour/modules/customer-product.module';

import { PostUser } from './eathHour/entities/post-user.entity';
import { BusinessProduct } from './eathHour/entities/business-product.entity';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from 'src/config/keys';
import { CustomerProduct } from './eathHour/entities/customer-product.entity';
@Module({
  imports: [UserModule, ForumModule,SubForumModule, AdminModule, OrganizationModule,EventModule, ThreadModule,SubThreadsModule,BusinessProductModule,PostUserModule,CustomerProductModule,MongooseModule.forRoot(config.mongoUri), 
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'earthHour',
    entities: [BusinessProduct, PostUser, CustomerProduct],
    synchronize: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
