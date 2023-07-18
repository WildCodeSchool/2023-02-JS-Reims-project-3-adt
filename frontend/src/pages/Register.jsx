import { useRef } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/ecotourisme.jpeg";

function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

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
                  email: emailRef.current.value,
                  password: passwordRef.current.value,
                }),
              }
            ).then((response) => {
              if (response.ok) {
                navigate("/login");
              } else {
                alert(
                  "il y a eu un problème lors de la la création d'un compte"
                );
              }
            });
          }}
        >
          <div className="register-form-input">
            <label htmlFor="email">Email &#42;</label>
            <input
              ref={emailRef}
              type="text"
              id="email"
              name="email"
              placeholder="Votre adresse mél"
            />
          </div>
          <div className="register-form-input">
            <label htmlFor="password">Password &#42;</label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              name="password"
              placeholder="Votre mot de passe"
            />
          </div>
          <button type="submit" className="buttonRegister">
            Créer mon compte
          </button>
          <p>
            Vous avez déjà un compte? <Link to="/login">Connexion</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
