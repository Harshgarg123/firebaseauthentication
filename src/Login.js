import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      let foundUser = null;
      
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        if (userData.email === email && userData.password === password) {
          foundUser = userData;
        }
      });

      if (foundUser) {
        localStorage.setItem("user", JSON.stringify(foundUser)); // Save session
        navigate("/users"); 
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <p>New user? <button className="register-btn" onClick={() => navigate("/")}>Register</button></p>
    </div>
  );
};

export default Login;
