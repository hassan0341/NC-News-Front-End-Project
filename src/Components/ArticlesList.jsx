import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import { useSearchParams } from "react-router-dom";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const filterByTopic = searchParams.get("topic");

  useEffect(() => {
    getArticles(filterByTopic).then((articles) => {
      setArticles(articles);
      setLoading(false);
    });
  }, [filterByTopic, articles]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div id="article-list">
        <h2 className="article-list-title">List of Articles:</h2>
        <ul>
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </div>
    );
  }
}

export default ArticlesList;
