import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../api";

import "../CSS/PostComment.css";

function PostNewComment({ updateComments, user }) {
  const { article_id } = useParams();

  const [newComment, setNewComment] = useState({ body: "" });
  const [commentPosted, setCommentPosted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prevComment) => ({ ...prevComment, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(article_id, { ...newComment, username: user }).then(() => {
      updateComments();
      setCommentPosted(true);
      setNewComment({ body: "" });

      setTimeout(() => {
        setCommentPosted(false);
      }, 3000);
    });
  };

  return (
    <div className="comment-list-container">
      <div className="comment-list">
        <h2>Post a comment!</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="body">Comment: </label>
            <textarea
              id="body"
              placeholder="Comment here..."
              value={newComment.body}
              onChange={handleChange}
              name="body"
              required
            />
          </div>
          <div>
            <button type="submit">Post comment</button>
            {commentPosted && (
              <p className="comment-confirmation">Comment posted!</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostNewComment;
