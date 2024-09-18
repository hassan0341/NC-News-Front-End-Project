import "../CSS/ArticleCard.css";
import { Link } from "react-router-dom";

function ArticleCard(props) {
  const { article } = props;

  return (
    <Link to={`/articles/${article.article_id}`}>
      <section className="article-card">
        <h3 className="card-title">{article.title}</h3>
        <p className="card-topic">Topic: {article.topic}</p>
        <img
          className="card-image"
          src={article.article_img_url}
          alt={article.title + " article image"}
        />
        <p>Created at: {new Date(article.created_at).toLocaleDateString()}</p>
        <p>Comment count: {article.comment_count}</p>
        <p>Votes: {article.votes}</p>
      </section>
    </Link>
  );
}

export default ArticleCard;
