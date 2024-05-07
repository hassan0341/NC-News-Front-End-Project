import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import Loading from "./Loading";
import CommentsCard from "./CommentCard";
import "../CSS/SingleArticle.css";

function SingleArticle() {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((articleData) => {
      setArticle(articleData);
      setLoading(false);
    });
  }, [article_id]);

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
        <CommentsCard />
      </div>
    );
  }
}

export default SingleArticle;
