import React from 'react';
import "./App.css";

import { NavBar } from "./components/NavBar";
import { Tools } from "./routes/Tools";
import { Tutorial } from "./routes/Tutorial";
import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/Tools" element={<Tools />}></Route>
          <Route path="/Tutorial" element={<Tutorial />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
