// import { useRef } from "react";
// import "./Register.css";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/ecotourisme.jpeg";
// import { useAuth } from "../contexts/AuthContext";

// // const user = { id: 1 };

// function Register() {
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const firstnameRef = useRef();
//   const lastnameRef = useRef();
//   const phonenumberRef = useRef();

//   const { user } = useAuth();
//   const navigate = useNavigate();

//   return (
//     <div className="backgrounds">
//       <div className="register">
//         <Link to="/">
//           <img src={logo} className="logoRegister" alt="" />
//         </Link>
//         <h1 className="creationaccount">Créez votre compte</h1>
//         <form
//           onSubmit={(event) => {
//             event.preventDefault();

//             fetch(
//               `${
//                 import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6001"
//               }/users/${user.id}`,
//               {
//                 method: "post",
//                 headers: {
//                   "content-type": "application/json",
//                 },
//                 body: JSON.stringify({
//                   email: emailRef.current.value,
//                   password: passwordRef.current.value,
//                   lastname: lastnameRef.current.value,
//                   firstname: firstnameRef.current.value,
//                   phone_number: phonenumberRef.current.value,
//                 }),
//               }
//             ).then((response) => {
//               if (response.ok) {
//                 navigate("/login");
//               } else {
//                 alert("il y a eu un problème lors de la la création du compte");
//               }
//             });
//           }}
//         >
//           <div className="register-form-input">
//             <label htmlFor="lastname">Nom &#42;</label>
//             <input
//               ref={lastnameRef}
//               type="text"
//               id="lastname"
//               name="lastname"
//               placeholder="Votre nom"
//             />
//           </div>

//           <div className="register-form-input">
//             <label htmlFor="firstname">Prénom &#42;</label>
//             <input
//               ref={firstnameRef}
//               type="text"
//               id="firstname"
//               name="firstname"
//               placeholder="Votre prénom"
//             />
//           </div>

//           <div className="register-form-input">
//             <label htmlFor="email">E-mail &#42;</label>
//             <input
//               ref={emailRef}
//               type="text"
//               id="email"
//               name="email"
//               className="register-input"
//               placeholder="Adresse mail"
//             />
//           </div>
//           <div className="register-form-input">
//             <label htmlFor="password">Mot de passe &#42;</label>
//             <input
//               ref={passwordRef}
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Mot de passe"
//               className="register-input"
//             />
//           </div>

//           <div className="register-form-input">
//             <label htmlFor="phone_number">Numéro de téléphone &#42;</label>
//             <input
//               ref={phonenumberRef}
//               type="text"
//               id="phone_number"
//               name="phone_number"
//               placeholder="numéro de téléphone"
//             />
//           </div>

//           <button type="submit" className="buttonRegister">
//             Créer mon compte
//           </button>
//           <p>
//             Vous avez déjà un compte ? <Link to="/login">Connexion</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../assets/ecotourisme.jpeg";
import { useAuth } from "../contexts/AuthContext";
import "./Register.css";

// const user = { id: 1 };

function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const phonenumberRef = useRef();

  const { user } = useAuth();
  const navigate = useNavigate();

  const Alert = () => {
    Swal.fire({
      icon: "success",
      text: "Merci pour votre participation et votre compte a été bien créé. L'agence ADT Marne vous contactera",
      confirmButtonColor: "#3f7438",
    });
  };

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
              }/users/${user.id}`,
              {
                method: "put",
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
                navigate("/");
              } else {
                alert("il y a eu un problème lors de la la création du compte");
              }
            });
          }}
        >
          <div className="register-form-input">
            <label htmlFor="lastname">Nom </label>
            <input
              ref={lastnameRef}
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Votre nom"
            />
          </div>

          <div className="register-form-input">
            <label htmlFor="firstname">Prénom </label>
            <input
              ref={firstnameRef}
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Votre prénom"
            />
          </div>

          <div className="register-form-input">
            <label htmlFor="email">E-mail </label>
            <input
              ref={emailRef}
              type="text"
              id="email"
              name="email"
              placeholder="Votre adresse mail"
            />
          </div>
          <div className="register-form-input">
            <label htmlFor="password">Mot de passe </label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              name="password"
              placeholder="Votre mot de passe"
            />
          </div>

          <div className="register-form-input">
            <label htmlFor="phone_number">Numéro de téléphone </label>
            <input
              ref={phonenumberRef}
              type="text"
              id="phone_number"
              name="phone_number"
              placeholder="Votre numéro de téléphone"
            />
          </div>
          <button type="submit" className="buttonRegister" onClick={Alert}>
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
