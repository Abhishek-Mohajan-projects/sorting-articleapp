import React from "react";
import Articles from "./components/Articles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recents from "./components/Recents";
import Router from "./routes/Router";
import "./dist/main.css";

function App() {
  return (
    <BrowserRouter>
      <h1 className="header">Sorting Articles App</h1>
      <Router />
      <main>
        <Routes>
          <Route path="/most-upvoted" element={<Articles />}></Route>
          <Route path="/most-recent" element={<Recents />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
