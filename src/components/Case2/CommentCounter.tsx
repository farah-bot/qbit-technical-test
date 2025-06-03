import React from 'react';
import { comments } from '../../data/comments';
import { countTotalComments, getCommentDepth } from '../../utils/commentUtils';
import type { IComment } from '../../types/comment';

const CommentItem: React.FC<{ comment: IComment; depth: number }> = ({ comment, depth }) => {
  const indentClass = `ml-${depth * 4}`;
  
  return (
    <div className={`${indentClass} mb-2`}>
      <div className={`bg-gray-${100 + depth * 50} p-3 rounded-lg border-l-4 border-blue-${300 + depth * 100}`}>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">ID: {comment.commentId}</span>
          <span className="text-xs text-gray-500">Depth: {depth}</span>
        </div>
        <p className="mt-1 text-gray-800">{comment.commentContent}</p>
      </div>
      
      {comment.replies && comment.replies.map(reply => (
        <CommentItem key={reply.commentId} comment={reply} depth={depth + 1} />
      ))}
    </div>
  );
};

const CommentCounter: React.FC = () => {
  const totalComments = countTotalComments(comments);
  const maxDepth = getCommentDepth(comments);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Case 2: Comment Counter</h2>
      
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-700">Total Comments</h3>
          <p className="text-3xl font-bold text-blue-800">{totalComments}</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-700">Max Depth</h3>
          <p className="text-3xl font-bold text-green-800">{maxDepth}</p>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-3 text-gray-700">Comment Tree:</h3>
        <div className="max-h-96 overflow-y-auto">
          {comments.map(comment => (
            <CommentItem key={comment.commentId} comment={comment} depth={0} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentCounter;