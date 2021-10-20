/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const ForumSchema = new mongoose.Schema({
    forumPic: String, 
    forumName: String,	 
    creatorId: String,
});

