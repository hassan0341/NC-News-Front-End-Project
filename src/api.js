import axios from "axios";

function getArticles(topic) {
  return axios
    .get("https://my-back-end-project.onrender.com/api/articles", {
      params: {
        topic: topic,
      },
    })
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      throw error;
    });
}

function getArticleById(article_id) {
  return axios
    .get(`https://my-back-end-project.onrender.com/api/articles/${article_id}`)
    .then((response) => {
      return response.data.article;
    })
    .catch((error) => {
      throw error;
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

function deleteComment(comment_id) {
  return axios.delete(
    `https://my-back-end-project.onrender.com/api/comments/${comment_id}`
  );
}

function getTopics() {
  return axios
    .get("https://my-back-end-project.onrender.com/api/topics")
    .then((response) => {
      return response.data.topics;
    });
}

export {
  getArticles,
  getArticleById,
  getCommentsByArticleID,
  patchVoteByArticleId,
  postComment,
  getUsernames,
  deleteComment,
  getTopics,
};
