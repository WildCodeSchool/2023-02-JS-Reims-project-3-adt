import { useRef } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import PropTypes from "prop-types";
import logo from "../assets/ecotourisme.jpeg";

export default function LoginForm({ setUser }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6001"}/login`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.info("do you see cookie here ?", document.cookie);

        setUser(data.user);
      });
  };

  return (
    <div className="background">
      <div className="login">
        <img src={logo} className="logoLogin" alt="logo adt" />
        <h1 className="connection">Connectez-vous</h1>
        <form onSubmit={handleSubmit}>
          <div className="login-form-input">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" ref={emailRef} />
          </div>
          <div className="login-form-input">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" ref={passwordRef} />
          </div>

          <div className="btn">
            <Link to="/dashboard" className="loginButton">
              Se connecter
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

LoginForm.propTypes = {
  setUser: PropTypes.func.isRequired,
};
