import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Components/Home/index.jsx";
import Casas from "../Components/Casas/index.jsx";

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Casas" element={<Casas />} />
      </Routes>
    </Router>
  );
}
