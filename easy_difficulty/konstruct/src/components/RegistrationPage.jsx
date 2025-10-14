// src/components/RegistrationPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/RegistrationPage.module.css";
import { userAPI } from "../api/mock-server"; // Импортируем наш mock-сервер
import Navbar from "./Navbar"; // Используем существующий Navbar

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // --- Валидация ---
    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await userAPI.registerUser({ username, email, password });
      setSuccess("Registration successful! You can now log in.");
      // Очищаем форму
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      // Через 2 секунды перенаправляем на главную
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Navbar /> {/* Добавим навигацию для удобства */}
      <div className={styles.registrationContainer}>
        <form className={styles.registrationForm} onSubmit={handleSubmit}>
          <h2>Create Account</h2>
          <p>Join the Konstruct family</p>

          <div className={styles.inputGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {error && <p className={styles.errorMessage}>{error}</p>}
          {success && <p className={styles.successMessage}>{success}</p>}

          <button type="submit" className={styles.submitButton}>
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default RegistrationPage;
