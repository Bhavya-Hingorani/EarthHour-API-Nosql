/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const AdminSchema = new mongoose.Schema({
    username: String, 
    password: String,	 
});