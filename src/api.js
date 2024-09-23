import axios from "axios";

const api = axios.create({
  baseURL: "https://my-back-end-project.onrender.com/api",
});

function getArticles(topic, sortBy, orderBy) {
  return api
    .get("/articles", {
      params: {
        topic: topic,
        sort_by: sortBy,
        order: orderBy,
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
  return api
    .get(`/articles/${article_id}`)
    .then((response) => {
      return response.data.article;
    })
    .catch((error) => {
      throw error;
    });
}

function getCommentsByArticleID(article_id) {
  return api.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
}

function patchVoteByArticleId(article_id, vote) {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: vote })
    .then((response) => {
      return response.data;
    });
}

function postComment(article_id, commentData) {
  return api
    .post(`/articles/${article_id}/comments`, commentData)
    .then((response) => {
      return response.data;
    });
}

function getUsernames() {
  return api.get("/users").then((response) => {
    return response.data.users;
  });
}

function deleteComment(comment_id) {
  return api.delete(`/comments/${comment_id}`);
}

function getTopics() {
  return api.get("/topics").then((response) => {
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
