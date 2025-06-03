export interface IComment {
    commentId: number;
    commentContent: string;
    replies?: IComment[];
  }