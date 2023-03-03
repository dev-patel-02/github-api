import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RepoDetails from "./components/RepoDetails";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/brynary")
    
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <div className="overflow-hidden px-2">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/repo/:id" element={<RepoDetails user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
