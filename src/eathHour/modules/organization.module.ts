/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganizationController } from 'src/organizations/organizations.controller';
import { OrganizationsService } from 'src/organizations/organizations.service';
import { OrganizationSchema } from '../schemas/organization.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'organization', schema: OrganizationSchema}])],
  controllers: [OrganizationController],
  providers: [OrganizationsService],
})
export class OrganizationModule {}
