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

function patchVoteByArticleId(article_id, vote) {
  return axios
    .patch(
      `https://my-back-end-project.onrender.com/api/articles/${article_id}`,
      { inc_votes: vote }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

function postComment(article_id, commentData) {
  return axios
    .post(
      `https://my-back-end-project.onrender.com/api/articles/${article_id}/comments`,
      commentData
    )
    .then((response) => {
      return response.data;
    });
}

function getUsernames() {
  return axios
    .get("https://my-back-end-project.onrender.com/api/users")
    .then((response) => {
      return response.data.users;
    });
}

export {
  getArticles,
  getArticleById,
  getCommentsByArticleID,
  patchVoteByArticleId,
  postComment,
  getUsernames,
};
