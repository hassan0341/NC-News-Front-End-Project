import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../api";
import AvailableUsers from "./AvailableUsers";
import "../CSS/PostComment.css";

function PostNewComment({ updateComments, user }) {
  const { article_id } = useParams();

  const [newComment, setNewComment] = useState({ username: "", body: "" });
  const [commentPosted, setCommentPosted] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setNewComment({ ...newComment, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(article_id, newComment).then(() => {
      updateComments();
      setCommentPosted(true);
      setNewComment({ username: "", body: "" });

      setTimeout(() => {
        setCommentPosted(false);
      }, 3000);
    });
  };

  return (
    <div className="comment-list-container">
      <AvailableUsers />
      <div className="comment-list">
        <h2>Post a comment!</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              id="username"
              type="text"
              placeholder="username here..."
              value={newComment.username}
              onChange={handleChange}
              name="username"
              required
            />
          </div>
          <div>
            <label htmlFor="body">Comment: </label>
            <input
              id="body"
              type="text"
              placeholder="comment here..."
              value={newComment.body}
              onChange={handleChange}
              name="body"
              required
            />
            <button type="submit">Post comment</button>
          </div>
          {commentPosted && (
            <p className="comment-confirmation">Comment posted!</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default PostNewComment;
