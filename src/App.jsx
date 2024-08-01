import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import HelpPage from "./pages/HelpPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </Router>
  );
};

export default App;
