/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema({
    eventId: String,	 
    eventTitle: String,	 
    eventDescription: String,		 
    eventImage: String,	 
    orgIdOfCreator: String,	 
    numberOfUsersIn: Number,
});