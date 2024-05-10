function sortArticles(articles, sortBy, orderBy) {
  return articles.sort((a, b) => {
    if (sortBy === "votes") {
      return orderBy === "asc" ? a.votes - b.votes : b.votes - a.votes;
    } else if (sortBy === "comment_count") {
      return orderBy === "asc"
        ? a.comment_count - b.comment_count
        : b.comment_count - a.comment_count;
    } else if (sortBy === "date") {
      const dateA = new Date(a.created_at);
      const dateB = new Date(b.created_at);
      return orderBy === "asc" ? dateA - dateB : dateB - dateA;
    }
  });
}

export default sortArticles;
