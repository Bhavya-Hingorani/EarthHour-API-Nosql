export class CreateThreadsDto {
    readonly threadId: string;
    readonly userId: string;
    readonly threadUpvotes: number;
    readonly threadTitle: string;
    readonly threadBody: string;
    readonly threadAttachment: string;
}
