import Header from "./Components/Header";
import ArticlesList from "./Components/ArticlesList";
import SingleArticle from "./Components/SingleArticle";
import Topics from "./Components/Topics";
import { Routes, Route } from "react-router-dom";
import { createContext } from "react";
import "./CSS/App.css";

export const UserContext = createContext();

const hardcodedUser = "jessjelly";

function App() {
  return (
    <>
      <UserContext.Provider value={hardcodedUser}>
        <Header />

        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route
            path="/articles/:article_id"
            element={<SingleArticle user={hardcodedUser} />}
          />
          <Route path="/topics" element={<Topics />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
