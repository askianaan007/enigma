import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import FoodRecipePage from "./components/Recipie/FoodRecipePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recipe/:id" element={<FoodRecipePage />} />
      </Routes>
    </Router>
  );
};

export default App;
