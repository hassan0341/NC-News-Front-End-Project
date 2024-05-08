import { useEffect, useState } from "react";
import { getUsernames } from "../api";
import "../CSS/AvailableUsers.css";

function AvailableUsers() {
  const [availableUsernames, setAvailableUsernames] = useState([]);

  useEffect(() => {
    getUsernames().then((usernames) => {
      setAvailableUsernames(usernames);
    });
  }, []);

  return (
    <div className="available-usernames">
      <h3>Available Usernames:</h3>
      <ul>
        {availableUsernames.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default AvailableUsers;
