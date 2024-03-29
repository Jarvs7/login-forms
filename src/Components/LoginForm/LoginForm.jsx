// LoginForm.js

import React, { useState } from "react";
import "./LoginForm.css";
import { FaLock, FaUser } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1> Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Login" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Senha" required />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Lembrar-me{" "}
          </label>
          <a href="#">Equeceu sua Senha?</a>
        </div>

        <button type="submit"> Login </button>
        <div className="register-link">
          <p>
            {" "}
            Não tem uma conta? <a href="#"> Registrar-se</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;