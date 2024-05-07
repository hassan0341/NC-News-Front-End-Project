import "../CSS/Card.css";

function ArticleCard(props) {
  const { article } = props;

  return (
    <section className="article-card">
      <h3 className="card-title">{article.title}</h3>
      <p className="card-topic">Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
      <img
        className="card-image"
        src={article.article_img_url}
        alt="this article has no image, sorry :("
      />
    </section>
  );
}

export default ArticleCard;
