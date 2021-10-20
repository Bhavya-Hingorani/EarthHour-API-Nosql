import { Injectable } from '@nestjs/common';
import { Organization } from 'src/eathHour/interfaces/organization.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OrganizationsService {
  constructor(@InjectModel('organization') public readonly organizationModel: Model<Organization>) {}

  // private readonly organizations: Organization[] = [
  //   {
  //     organizationId: '467',
  //     orgName: 'ministry of environment forest and climate change',
  //     orgDescription:
  //       'The MoEF is committed towards maintaining accountability and transparency, and making the Right to Information Act, 2005 effectively operational. We welcome queries under the Act and will try to provide answers through the concerned authorities. This section provides all the relevant details that an applicant will require regarding the Act. For better accessibility, it also includes the names and addresses of the key officers and employees of the Ministry.',
  //     orgImage:
  //       'https://yt3.ggpht.com/ytc/AKedOLS_oCho4azSIlypBSUVT1C0NsLDuRjhfGyfP8Sc=s900-c-k-c0x00ffffff-no-rj',
  //     twitterLink:
  //       'https://twitter.com/moefcc?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
  //     facebookLink: 'https://www.facebook.com/moefcc/',
  //     instagramLink: 'https://www.instagram.com/moefccgoi/?hl=en',
  //     websiteLink: 'https://moef.gov.in/en/',
  //   },
  
  async addOrg(org: Organization): Promise<Organization>{
    const newOrg = new this.organizationModel(org);
    return await newOrg.save(); 
  }
  async getAllOrganization(): Promise<Organization[]> {
    return this.organizationModel.find();
  }
  async getParticularOrganization(id: string): Promise<Organization> {
    return this.organizationModel.findOne({ _id: id });
  }
  async deleteOrg(id: string): Promise<Organization>{
    return await this.organizationModel.findByIdAndDelete(id);
  }
}
