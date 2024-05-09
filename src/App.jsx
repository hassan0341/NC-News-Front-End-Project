import Header from "./Components/Header";
import ArticlesList from "./Components/ArticlesList";
import SingleArticle from "./Components/SingleArticle";
import Topics from "./Components/Topics";
import { Routes, Route } from "react-router-dom";

import "./CSS/App.css";

const hardcodedUser = {
  username: "Gojo17",
  userId: "123",
};

function App() {
  return (
    <>
      <Header user={hardcodedUser} />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/topics" element={<Topics />} />
      </Routes>
    </>
  );
}

export default App;
