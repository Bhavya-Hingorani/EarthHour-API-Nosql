export class CreateThreadsDto {
    readonly threadId: string;
    readonly subForumId: string;
    readonly userId: string;
    readonly threadUpvotes: number;
    readonly threadTitle: string;
    readonly threadBody: string;
    readonly threadAttachment: string;

    
    //readonly upvotes: number;
}
