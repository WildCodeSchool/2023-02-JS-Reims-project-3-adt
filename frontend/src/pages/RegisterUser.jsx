import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../assets/ecotourisme.jpeg";

export default function RegisterUser() {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const companyNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="background">
      <div className="registerUser">
        <img src={logo} className="logoRegister" alt="logo adt" />
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
                  firstname: firstnameRef.current.value,
                  lastname: lastnameRef.current.value,
                  company_name: companyNameRef.current.value,
                  email: emailRef.current.value,
                  phone_number: phoneNumberRef.current.value,
                  password: passwordRef.current.value,
                }),
              }
            );
          }}
        >
          <div className="register-form-input">
            <label htmlFor="firstname">Votre prénom &#42;</label>
            <input
              ref={firstnameRef}
              type="text"
              id="firstname"
              name="firstname"
            />
          </div>
          <div className="register-form-input">
            <label htmlFor="lastname">Votre nom &#42;</label>
            <input
              ref={lastnameRef}
              type="text"
              id="lastname"
              name="lastname"
            />
          </div>
          <div className="register-form-input">
            <label htmlFor="company_name">Nom de votre entreprise &#42;</label>
            <input
              ref={companyNameRef}
              type="text"
              id="company_name"
              name="company_name"
            />
          </div>
          <div className="register-form-input">
            <label htmlFor="email">Adresse mail &#42;</label>
            <input ref={emailRef} type="text" id="email" name="email" />
          </div>
          <div className="register-form-input">
            <label htmlFor="phone_number">Numéro de téléphone &#42;</label>
            <input
              ref={phoneNumberRef}
              type="tel"
              id="phone_number"
              name="phone_number"
            />
          </div>
          <div className="register-form-input">
            <label htmlFor="password">Mot de passe &#42;</label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div className="btn-register">
            <Link to="/loginuser" className="buttonRegister">
              Créer mon compte
            </Link>
          </div>
          <p>
            Vous avez déjà un compte? <Link to="/loginuser">Connexion</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
