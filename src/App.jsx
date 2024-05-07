import Header from "./Components/Header";
import ArticlesList from "./Components/ArticlesList";
import { Routes, Route } from "react-router-dom";

import "./CSS/App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles" element={<ArticlesList />} />
      </Routes>
    </>
  );
}

export default App;
