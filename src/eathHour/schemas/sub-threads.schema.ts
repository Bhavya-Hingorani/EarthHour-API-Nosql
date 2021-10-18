/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const SubThreadsSchema = new mongoose.Schema({
    threadId: String, 
    subThreadId: String,
    subThreadDescription: String,
    
});