/* eslint-disable prettier/prettier */
export class CreateSubThreadsDto {
    readonly subThreadId: string;
    readonly threadId: string;	 
    readonly userId: string;
    readonly subThreadBody: string;
    readonly upvotes: number;
  }