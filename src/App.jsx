import Header from "./Components/Header";
import ArticlesList from "./Components/ArticlesList";
import SingleArticle from "./Components/SingleArticle";
import Topics from "./Components/Topics";
import { Routes, Route } from "react-router-dom";

import "./CSS/App.css";

const hardcodedUser = "jessjelly";

function App() {
  return (
    <>
      <Header user={hardcodedUser} />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route
          path="/articles/:article_id"
          element={<SingleArticle user={hardcodedUser} />}
        />
        <Route path="/topics" element={<Topics />} />
      </Routes>
    </>
  );
}

export default App;
