import { useRef } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../assets/ecotourisme.jpeg";

function Register() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="background">
      <div className="register">
        <img src={logo} className="logoRegister" alt="" />
        <h1 className="creationaccount">Créez votre compte</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();

            fetch(
              `${
                import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6001"
              }/users`,
              {
                method: "post",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({
                  username: usernameRef.current.value,
                  email: emailRef.current.value,
                  password: passwordRef.current.value,
                }),
              }
            );
          }}
        >
          <div className="register-form-input">
            <label htmlFor="username">Username &#42;</label>
            <input
              ref={usernameRef}
              type="text"
              id="username"
              name="username"
            />
          </div>
          <div className="register-form-input">
            <label htmlFor="email">Email &#42;</label>
            <input ref={emailRef} type="text" id="email" name="email" />
          </div>
          <div className="register-form-input">
            <label htmlFor="password">Password &#42;</label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              name="password"
            />
          </div>
          <Link to="/login" className="buttonRegister">
            Créer mon compte
          </Link>
          <p>
            Vous avez déjà un compte? <Link to="/login">Connexion</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
