import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import DropDown from "./DropDown";
import ErrorComponent from "./ErrorComponent";
import sortArticles from "../utils/sorting";
import { useSearchParams } from "react-router-dom";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState("votes");
  const [orderBy, setOrderBy] = useState("desc");
  const [isError, setIsError] = useState(null);
  const filterByTopic = searchParams.get("topic");

  useEffect(() => {
    setLoading(true);
    getArticles(filterByTopic)
      .then((articles) => {
        const sortedArticles = sortArticles(articles, sortBy, orderBy);
        setArticles(sortedArticles);
        setLoading(false);
        setIsError(null);
      })
      .catch((error) => {
        setIsError(error.response.data.msg);
        setLoading(false);
      });
  }, [filterByTopic, sortBy, orderBy]);

  const handleSortChange = (option) => {
    setSortBy(option);
    setOrderBy("desc");
  };

  const handleOrderChange = (option) => {
    setOrderBy(option);
  };

  return (
    <div id="article-list">
      <h2 className="article-list-title">List of Articles:</h2>
      <DropDown
        onSortChange={handleSortChange}
        onOrderChange={handleOrderChange}
      />
      {loading ? (
        <Loading />
      ) : isError ? (
        <ErrorComponent error={isError} />
      ) : (
        <ul>
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default ArticlesList;
