import { Controller , Post, Get, Delete, Param, Body} from '@nestjs/common';
import { CreateOrgDto } from 'src/eathHour/dto/get-organization.dto';
import { OrganizationsService } from './organizations.service';
import { Organization } from 'src/eathHour/interfaces/organization.interface';
@Controller('organization')
export class OrganizationController {
    constructor(private readonly organizationsService:OrganizationsService  ){}

    @Post()
    addOrg(@Body() createOrgDto: CreateOrgDto): Promise<Organization> {
      return this.organizationsService.addOrg(createOrgDto);
    }
    
    @Get()
    getAllOrganization(): Promise<Organization[]> {
      return this.organizationsService.getAllOrganization();
    }
  
    @Get(':id')
    getOrg(@Param() param): Promise<Organization> {
      return this.organizationsService.getParticularOrganization(param.id);
    }
    
    @Delete(':id')
    deleteOrg(@Param() param) {
      return `id: ${param.id}`;
    }
}
