import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import DropDown from "./DropDown";
import ErrorComponent from "./ErrorComponent";
import { useSearchParams } from "react-router-dom";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isError, setIsError] = useState(null);
  const topic = searchParams.get("topic");
  const sortBy = searchParams.get("sort_by") || "created_at";
  const orderBy = searchParams.get("order") || "desc";

  useEffect(() => {
    setLoading(true);
    getArticles(topic, sortBy, orderBy)
      .then((articlesData) => {
        setArticles(articlesData);
        setLoading(false);
        setIsError(null);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setIsError(error.response.data.msg);
        } else {
          setIsError(error.response.data.msg);
        }
        setLoading(false);
      });
  }, [topic, sortBy, orderBy]);

  const handleSortChange = (option) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort_by", option);
    params.set("order", "desc");
    setSearchParams(params);
  };

  const handleOrderChange = (option) => {
    const params = new URLSearchParams(searchParams);
    params.set("order", option);
    setSearchParams(params);
  };

  return (
    <main id="article-list">
      <h2 className="article-list-title">List of Articles:</h2>
      <DropDown
        onSortChange={handleSortChange}
        onOrderChange={handleOrderChange}
        currentSortBy={sortBy}
        currentOrderBy={orderBy}
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
    </main>
  );
}

export default ArticlesList;
