import { Controller , Post, Get, Delete, Param, Body} from '@nestjs/common';
import { CreateOrgDto } from 'src/eathHour/dto/get-organization.dto';
import { OrganizationsService } from './organizations.service';
import { Organization } from 'src/eathHour/interfaces/organization.interface';
@Controller('Organization')
export class OrganizationController {
    constructor(private readonly organizationsService:OrganizationsService  ){}

    @Post()
    createOrg(@Body() createOrgDto: CreateOrgDto): string{
        return `name: ${createOrgDto.orgName}`;
    }

    @Get(':id')
    getOrg(@Param() param): Organization {
      return this.organizationsService.getParticularOrganization(param.id);
    }
  
    @Delete(':id')
    deleteOrg(@Param() param) {
      return `id: ${param.id}`;
    }


}