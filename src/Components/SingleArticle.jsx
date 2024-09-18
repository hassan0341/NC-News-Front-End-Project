import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleID } from "../api";
import Loading from "./Loading";
import CommentsCard from "./CommentCard";
import VoteArticle from "./VoteArticle";
import PostNewComment from "./PostNewComment";
import ErrorComponent from "./ErrorComponent";
import "../CSS/SingleArticle.css";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    getArticleById(article_id).then((articleData) => {
      setArticle(articleData);
      setLoading(false);
      setIsError(null);
    });
    getCommentsByArticleID(article_id)
      .then((commentData) => {
        const sortedComments = commentData.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setComments(sortedComments);
        setLoading(false);
      })
      .catch((error) => {
        setIsError(error.response.data.msg);
        setLoading(false);
      });
  }, [article_id]);

  const updateComments = () => {
    getCommentsByArticleID(article_id).then((commentData) => {
      const sortedComments = commentData.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setComments(sortedComments);
    });
  };

  return (
    <div id="single-article">
      {loading ? (
        <Loading />
      ) : isError ? (
        <ErrorComponent error={isError} />
      ) : (
        <>
          <h2>{article.title}</h2>
          <p>Written by: {article.author}</p>
          <img
            src={article.article_img_url}
            alt="Sorry, this article has no image :("
          />
          <p>{article.body}</p>
          <VoteArticle articleVotes={article.votes} />
          <PostNewComment updateComments={updateComments} />
          <CommentsCard updateComments={updateComments} comments={comments} />
        </>
      )}
    </div>
  );
}

export default SingleArticle;
