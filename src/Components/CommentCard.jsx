import { useContext } from "react";
import { UserContext } from "../App";
import DeleteComment from "./DeleteComment";
import "../CSS/CommentCard.css";

function CommentsCard({ updateComments, comments }) {
  const user = useContext(UserContext);
  const handleDelete = (comment_id) => {
    const updatedComments = comments.filter(
      (comment) => comment.comment_id !== comment_id
    );
    updateComments(updatedComments);
  };

  return (
    <section className="comment-section">
      <h2 className="com-title">Comments</h2>
      {comments.length === 0 ? (
        <p className="no-comments-msg">No comments here, yet 👀</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.comment_id} className="single-comment">
            <h3 className="user">User: {comment.author}</h3>
            <p className="comment">{comment.body}</p>
            {comment.author === user && (
              <DeleteComment
                comment_id={comment.comment_id}
                onDelete={() => handleDelete(comment.comment_id)}
              />
            )}
          </div>
        ))
      )}
    </section>
  );
}

export default CommentsCard;
