import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./src/pages/Login";
import Homepage from "./src/pages/Homepage";
import ProductPage from "./src/pages/ProductPage";

const App = () => {
  const internalStyle = {
    backgroundColor: "blue",
    color: "yellow",
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
