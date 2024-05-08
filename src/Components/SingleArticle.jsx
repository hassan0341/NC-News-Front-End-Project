import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleID } from "../api";
import Loading from "./Loading";
import CommentsCard from "./CommentCard";
import VoteArticle from "./VoteArticle";
import PostNewComment from "./PostNewComment";
import "../CSS/SingleArticle.css";

function SingleArticle() {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((articleData) => {
      setArticle(articleData);
      setLoading(false);
    });
    getCommentsByArticleID(article_id).then((commentData) => {
      setComments(commentData);
    });
  }, [article_id]);

  const updateComments = () => {
    getCommentsByArticleID(article_id).then((commentData) => {
      setComments(commentData);
    });
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div id="single-article">
        <h2>{article.title}</h2>
        <p>Written by: {article.author}</p>
        <img
          src={article.article_img_url}
          alt="Sorry, this article has no image :("
        />
        <p>{article.body}</p>
        <VoteArticle articleVotes={article.votes} />
        <PostNewComment updateComments={updateComments} />
        <CommentsCard updateComments={updateComments} />
      </div>
    );
  }
}

export default SingleArticle;
