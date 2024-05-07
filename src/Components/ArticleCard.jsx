import "../CSS/Card.css";
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
          alt="this article has no image, sorry :("
        />
      </section>
    </Link>
  );
}

export default ArticleCard;
