import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Technical from "./pages/Technical";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/technical" element={<Technical />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
