/* eslint-disable prettier/prettier */
export class CreateEventDto {
    readonly eventId: string;
    readonly eventTitle: string;
    readonly orgIdOfCreator: string;
    readonly eventImage: string;
    readonly eventDescription: string;
    readonly numberOfUsersIn: number;
  }
 