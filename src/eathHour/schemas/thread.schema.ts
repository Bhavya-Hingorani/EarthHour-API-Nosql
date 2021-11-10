/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const ThreadsSchema = new mongoose.Schema({
    threadId: String,		 
    subForumId: String,	 
    userId: String,		 
    threadUpvotes: Number,		 
    threadTitle: String,		 
    threadBody: String,		 
    threadAttachment: String,
});