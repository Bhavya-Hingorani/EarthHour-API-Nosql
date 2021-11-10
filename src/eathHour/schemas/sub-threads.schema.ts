/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const SubThreadsSchema = new mongoose.Schema({
    subThreadId: String,
    threadId: String,
    userId: String,
    upvotes: Number,
    subThreadBody: String,    
});