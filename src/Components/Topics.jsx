import { useEffect, useState } from "react";
import { getTopics } from "../api";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import "../CSS/Topic.css";

function Topics() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTopics().then((topicsData) => {
      setTopics(topicsData);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="topics-container">
        <h2 className="topics-heading">Topics:</h2>
        <ul className="topics-list">
          {topics.map((topic, index) => {
            let destination = `/articles?topic=${topic.slug}`;
            return (
              <Link to={destination} key={index} className="topic-link">
                <li className="topic-item">{topic.slug}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Topics;
