import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Dashboard from "./Components/Dashboard";
import Protect from "./Components/Protect";
import Detect from "./Components/Detect";
import Monitor from "./Components/Monitor";
import Setting from "./Components/Setting";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/protect" element={<Protect />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/detect" element={<Detect />} />
        <Route path="/monitor" element={<Monitor />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </>
  );
};

export default Main;
