import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PeluqueriaTurnos from "./app/Inicio.tsx";
import AdminPage from "./app/admin/AdminPage.tsx";
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PeluqueriaTurnos />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
