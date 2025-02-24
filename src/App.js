import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import UsersList from "./UsersList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<ProtectedRoute><UsersList /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("user"); 
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default App;
