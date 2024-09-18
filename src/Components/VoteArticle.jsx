import { useState } from "react";
import { useParams } from "react-router-dom";
import { patchVoteByArticleId } from "../api";
import "../CSS/VoteArticle.css";

function VoteArticle(props) {
  const { articleVotes } = props;
  const { article_id } = useParams();
  const [votes, setVotes] = useState(articleVotes);

  const handleVote = (vote) => {
    patchVoteByArticleId(article_id, vote);
    setVotes((currVote) => currVote + vote);
  };

  return (
    <div className="vote-article">
      <h2>Votes: </h2>
      <div className="vote-buttons">
        <button
          className="up-button"
          onClick={() => handleVote(1)}
          disabled={votes === 1}
        >
          Upvote 👆
        </button>
        <button
          className="down-button"
          onClick={() => handleVote(-1)}
          disabled={votes === -1}
        >
          Downvote👇
        </button>
      </div>
      <h2 className="vote-count">{articleVotes + votes}</h2>
    </div>
  );
}

export default VoteArticle;
