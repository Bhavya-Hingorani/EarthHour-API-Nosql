/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const OrganizationSchema = new mongoose.Schema({
    organizationId: String,	 
    orgName: String,	 
    orgDescription: String,		 
    orgImage: String,		 
    twitterLink: String,		 
    facebookLink: String,		 
    instagramLink: String,		 
    websiteLink: String,	
});