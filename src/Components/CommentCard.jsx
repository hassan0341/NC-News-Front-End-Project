import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleID } from "../api";
import "../CSS/CommentCard.css";

function CommentsCard() {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleID(article_id).then((commentData) => {
      setComments(commentData);
    });
  }, [article_id]);

  return (
    <section className="comment-section">
      <h2 className="com-title">Comments</h2>
      {comments.length === 0 ? (
        <p className="no-comments-msg">No comments here, yet 👀</p>
      ) : (
        comments.map((comment, index) => (
          <div key={index} className="single-comment">
            <h3 className="user">User: {comment.author}</h3>
            <p className="comment">{comment.body}</p>
          </div>
        ))
      )}
    </section>
  );
}

export default CommentsCard;
