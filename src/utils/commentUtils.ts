import type { IComment } from '../types/comment';

export const countTotalComments = (comments: IComment[]): number => {
  let total = comments.length;
  
  comments.forEach(comment => {
    if (comment.replies && comment.replies.length > 0) {
      total += countTotalComments(comment.replies);
    }
  });
  
  return total;
};

export const getCommentDepth = (comments: IComment[], depth = 0): number => {
  let maxDepth = depth;
  
  comments.forEach(comment => {
    if (comment.replies && comment.replies.length > 0) {
      const currentDepth = getCommentDepth(comment.replies, depth + 1);
      maxDepth = Math.max(maxDepth, currentDepth);
    }
  });
  
  return maxDepth;
};