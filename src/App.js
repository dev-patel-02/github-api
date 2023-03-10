import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RepoDetails from "./components/RepoDetails";
import ScrollToTop from "./components/ScrollToTop";
import { axe } from "@axe-core/react";

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
if (process.env.NODE_ENV !== "production") {
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}
