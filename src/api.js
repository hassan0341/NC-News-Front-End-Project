import axios from "axios";

function getArticles() {
  return axios
    .get("https://my-back-end-project.onrender.com/api/articles")
    .then((response) => {
      return response.data.articles;
    });
}

function getArticleById(article_id) {
  return axios
    .get(`https://my-back-end-project.onrender.com/api/articles/${article_id}`)
    .then((response) => {
      return response.data.article;
    });
}

function getCommentsByArticleID(article_id) {
  return axios
    .get(
      `https://my-back-end-project.onrender.com/api/articles/${article_id}/comments`
    )
    .then((response) => {
      return response.data.comments;
    });
}

export { getArticles, getArticleById, getCommentsByArticleID };
