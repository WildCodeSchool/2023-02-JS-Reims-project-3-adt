import { useRef } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/ecotourisme.jpeg";
import { useAuth } from "../contexts/AuthContext";

// const user = { id: 1 };

function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const phonenumberRef = useRef();

  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="backgrounds">
      <div className="register">
        <Link to="/">
          <img src={logo} className="logoRegister" alt="" />
        </Link>
        <h1 className="creationaccount">Créez votre compte</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();

            fetch(
              `${
                import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6001"
              }/users/${user.id}`,
              {
                method: "post",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({
                  email: emailRef.current.value,
                  password: passwordRef.current.value,
                  lastname: lastnameRef.current.value,
                  firstname: firstnameRef.current.value,
                  phone_number: phonenumberRef.current.value,
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
            <label htmlFor="lastname">Nom &#42;</label>
            <input
              ref={lastnameRef}
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Votre Nom"
            />
          </div>

          <div className="register-form-input">
            <label htmlFor="firstname">Prénom &#42;</label>
            <input
              ref={firstnameRef}
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Votre Prénom"
            />
          </div>

          <div className="register-form-input">
            <label htmlFor="email">Email &#42;</label>
            <input
              ref={emailRef}
              type="text"
              id="email"
              name="email"
              className="register-input"
              placeholder="Adresse mail"
            />
          </div>
          <div className="register-form-input">
            <label htmlFor="password">Password &#42;</label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              name="password"
              placeholder="Mot de passe"
              className="register-input"
            />
          </div>

          <div className="register-form-input">
            <label htmlFor="phone_number">Numéro de téléphone &#42;</label>
            <input
              ref={phonenumberRef}
              type="text"
              id="phone_number"
              name="phone_number"
              placeholder="Numéro de téléphone"
            />
          </div>

          <button type="submit" className="buttonRegister">
            Créer mon compte
          </button>
          <p>
            Vous avez déjà un compte ? <Link to="/login">Connexion</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
