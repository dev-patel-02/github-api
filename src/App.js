import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RepoDetails from "./components/RepoDetails";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/brynary")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  localStorage.setItem("users", JSON.stringify(users));
  const githubUser = JSON.parse(localStorage.getItem("users"));
  return (
    <div className="px-2">
      <Routes>
        <Route path="/" element={<Home githubUser={githubUser} />} />
        <Route
          path="/repo/:id"
          element={<RepoDetails githubUser={githubUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
