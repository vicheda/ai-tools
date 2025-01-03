import React from 'react';
import "./App.css";

import { NavBar } from "./components/NavBar";
import { Tools } from "./routes/Tools";
import { Tutorial } from "./routes/Tutorial";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Tutorial />} />
          <Route path="/Tools" element={<Tools />} />
          <Route path="/Tutorial" element={<Tutorial />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
