/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const ThreadsSchema = new mongoose.Schema({
    threadId: String, 
    threadTitle: String,	 
    threadDescription: String,
    
});