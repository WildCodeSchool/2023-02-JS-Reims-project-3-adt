/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// import { Link } from "react-router-dom";
// import logo from "../assets/ecotourisme.jpeg";
// import "./Instruction.css";

// function Instruction() {
//   return (
//     <div className="instruction">
//       <img src={logo} alt="" className="logoInstruction" />
//       <h2>Préambule</h2>
//       <p>
//         Cette charte concerne les acteurs du tourisme réceptif dans la Marne,
//         elle a pour but de valoriser l’engagement vers un tourisme plus
//         responsable. C’est aussi une charte de qualité puisqu’elle prend en
//         compte les aménagements mis à la disposition des touristes.
//       </p>
//       <p>
//         La clientèle étant de plus en plus exigeante par rapport au respect de
//         l’environnement, l’enjeu de cette charte est de faire prendre conscience
//         aux acteurs de la Marne que le tourisme vert est un tourisme d’avenir,
//         et qu’il faut le construire dès aujourd’hui.
//       </p>
//       <p>
//         La plupart des aménagements qui réduisent l’impact sur l’environnement
//         permettent également de gérer sa consommation d’énergie et, sur le long
//         terme, de réduire son coût de fonctionnement de façon durable.
//       </p>
//       <h2>Consignes d’auto-évaluation</h2>
//       <p>
//         Pour chaque critère étudié, il faudra déterminer s'il est applicable à
//         votre activité ou non. S'il n'est pas applicable, cochez la case
//         correspondante, il sera ainsi écarté du champ d'analyse.
//       </p>
//       <span>Cette charte comporte des critères de trois natures :</span>
//       <ul>
//         <li>
//           Les critères <span>obligatoires</span> qui sont éliminatoires s’ils ne
//           sont pas validés. Ce sont des prérequis, ils ne rapportent donc pas de
//           points pour valider la charte.
//         </li>
//         <li>
//           Les critères <span>essentiels</span> concernent la plupart du temps
//           des gestes simples et applicables au quotidien. Pour que l’activité
//           soit considérée comme Eco-Tourisme, il faudra valider au moins 80% du
//           total de ces critères arrondis à l’unité supérieure, complétés si
//           besoin par les critères optionnels validés.
//         </li>
//         <li>
//           Les critères <span>optionnels</span> concernent en partie des
//           aménagements qui sont plus contraignants ou coûteux à mettre en place,
//           ils ne peuvent donc pas être imposés mais sont tout de même valorisés
//           s’ils sont validés. Ils sont à considérer comme des pistes
//           d’amélioration dans une démarche de progrès continus.
//         </li>
//       </ul>
//       <h3>
//         Veuillez choisir votre secteur d'activité ci-dessous pour commencer :
//       </h3>
//       <div className="userButton">
//         <Link to="/categories/1" className="userBtn">
//           Hebergement
//         </Link>
//         <Link to="/categories/restaurant" className="userBtn">
//           Restaurant
//         </Link>
//         <Link to="/categories/guide" className="userBtn">
//           Guide
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Instruction;

// import React, { useState } from "react";
// import firstCard from "../assets/background-marne.jpeg";
// import "./ExpandedInstruction.css";

// function ExpandedInstruction() {
//   const [isShowMore, setIsShowMore] = useState(false);

//   const toggleReadMoreLess = () => {
//     setIsShowMore(!isShowMore);
//   };

//   return (
//     <section className="card-container">
//       <article className="card">
//         <h3>Preambule</h3>
//         <div className="card-img">
//           <img src={firstCard} alt="card" className="card-img" />
//         </div>
//         <div className="content-card">
//           <p>
//             Cette charte concerne les acteurs du tourisme réceptif dans la
//             Marne, elle a pour but de valoriser l’engagement vers un tourisme
//             responsable. C’est aussi une charte de qualité puisqu’elle prend en
//             compte les aménagements mis à la disposition des touristes.
//           </p>
//         </div>
//         {isShowMore && (
//           <div className="content-card">
//             <p>
//               La clientèle étant de plus en plus exigeante par rapport au
//               respect de respect de respect de respect de l’environnement,
//               l’enjeu de cette charte est charte est prendre conscience aux
//               acteurs de la Marne que le tourisme vert est un tourisme d’avenir,
//               et qu’il faut le construire dès aujourd’hui.
//             </p>
//             <p>
//               La plupart des aménagements qui réduisent l’impact sur
//               l’environnement permettent également de gérer sa consommation
//               d’énergie et, sur le long terme, de réduire son coût de
//               fonctionnement de façon durable.
//             </p>
//           </div>
//         )}

//         <button
//           type="button"
//           onClick={toggleReadMoreLess}
//           className="btn-toggle"
//         >
//           {isShowMore ? "Read Less" : "Read More"}
//         </button>
//       </article>
//     </section>
//   );
// }

// export default ExpandedInstruction;

import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ExpandedInstruction.css";

function ExpandedInstruction({ title, imgUrl, body, bodyContent }) {
  const [isShowMore, setIsShowMore] = useState(false);

  const handleButtonReadMore = () => {
    setIsShowMore(!isShowMore);
  };

  // const handleKeyPress = (event) => {
  //   // Check if the pressed key is Enter (key code 13)
  //   if (event.key === "Enter") {
  //     handleButtonReadMore();
  //   }
  // };
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
          <div className="card-body">
            <p>{body}</p>
          </div>
          {isShowMore ? (
            <div className="card-body">
              <p>{bodyContent}</p>
            </div>
          ) : (
            " "
          )}
        </div>
        <div
          className="btn-click-more"
          onClick={handleButtonReadMore}
          // onKeyPress={handleKeyPress}
        >
          <button type="button">
            {" "}
            {isShowMore ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
}

ExpandedInstruction.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  bodyContent: PropTypes.string.isRequired,
};

export default ExpandedInstruction;
