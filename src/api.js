import axios from "axios";

function getArticles() {
  return axios
    .get("https://my-back-end-project.onrender.com/api/articles")
    .then((response) => {
      return response.data.articles;
    });
}

function getArticleById(planet_id) {
  return axios
    .get(`https://my-back-end-project.onrender.com/api/articles/${planet_id}`)
    .then((response) => {
      return response.data.article;
    });
}

export { getArticles, getArticleById };
