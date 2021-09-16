/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const SubForumSchema = new mongoose.Schema({
    forumId: String, 
    subForumTitle: String,	 
    subForumDescription: String,
});