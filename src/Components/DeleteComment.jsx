import { deleteComment } from "../api";
import "../CSS/DeleteButton.css";

function DeleteComment({ comment_id, onDelete }) {
  const handleDelete = () => {
    deleteComment(comment_id).then(() => {
      onDelete(comment_id);
    });
  };

  return (
    <button className="delete-button" onClick={handleDelete}>
      Delete
    </button>
  );
}

export default DeleteComment;
