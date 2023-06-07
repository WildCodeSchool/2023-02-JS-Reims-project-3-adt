import NavbarUser from "../components/NavbarUser";
import FooterUser from "../components/FooterUser";

function Home() {
  return (
    <div>
      <NavbarUser />
      <div className="instruction">
        <div className="instructionWrap">
          <h2>Préambule</h2>
          <p>
            1 2 3 4 Marne Ecotourisme - Audit engagement Version nov. 2022
            Préambule Cette charte concerne les acteurs du tourisme réceptif
            dans la Marne, elle a pour but de valoriser l’engagement vers un
            tourisme plus responsable. C’est aussi une charte de qualité
            puisqu’elle prend en compte les aménagements mis à la disposition
            des touristes. La clientèle étant de plus en plus exigeante par
            rapport au respect de l’environnement, l’enjeu de cette charte est
            de faire prendre conscience aux acteurs de la Marne que le tourisme
            vert est un tourisme d’avenir, et qu’il faut le construire dès
            aujourd’hui. La plupart des aménagements qui réduisent l’impact sur
            l’environnement permettent également de gérer sa consommation
            d’énergie et, sur le long terme, de réduire son coût de
            fonctionnement de façon durable.
            <h3>Consignes d’auto-évaluation</h3>
            <p>
              Pour chaque critère étudié, il faudra déterminer s'il est
              applicable à votre activité ou non. S'il n'est pas applicable,
              cochez la case correspondante, il sera ainsi écarté du champ
              d'analyse.
            </p>
            <p>Cette charte comporte des critères de trois natures :</p>
            <ul className="criteria">
              <li className="listCriteria">
                Les critères obligatoires qui sont éliminatoires s’ils ne sont
                pas validés. Ce sont des prérequis, ils ne rapportent donc pas
                de points pour valider la charte.
              </li>
              <li className="listCriteria">
                Les critères essentiels concernent la plupart du temps des
                gestes simples et applicables au quotidien. Pour que l’activité
                soit considérée comme Eco-Tourisme, il faudra valider au moins
                80% du total de ces critères arrondis à l’unité supérieure,
                complétés si besoin par les critères optionnels validés.
              </li>
              <li className="listCriteria">
                Les critères optionnels concernent en partie des aménagements
                qui sont plus contraignants ou coûteux à mettre en place, ils ne
                peuvent donc pas être imposés mais sont tout de même valorisés
                s’ils sont validés. Ils sont à considérer comme des pistes
                d’amélioration dans une démarche de progrès continus.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <FooterUser />
    </div>
  );
}

export default Home;
