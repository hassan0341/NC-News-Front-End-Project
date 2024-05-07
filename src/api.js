import axios from "axios";

function getArticles() {
  return axios
    .get("https://my-back-end-project.onrender.com/api/articles")
    .then((response) => {
      return response.data.articles;
    });
}

export { getArticles };
