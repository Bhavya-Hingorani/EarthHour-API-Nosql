export class CreateSubForumDto {
    readonly subForumId: number;
    readonly userId: number;
    readonly threadUpvotes: number;
    readonly threadTitle: string;
    readonly threadBody: string;
    readonly threadAttachment: string;
  }
  