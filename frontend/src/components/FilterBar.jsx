import { useState } from "react";
import "./FilterBar.css";

// eslint-disable-next-line react/prop-types
export default function FilterBar({ onFilter }) {
  const [category, setCategory] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    onFilter({ category });
  };

  return (
    <form className="filters" onSubmit={handleFilterSubmit}>
      <select value={category} onChange={handleCategoryChange}>
        <option value="">Questions</option>
        <option value="">Questions répondues</option>
        <option value="">Atteints</option>
        <option value="">Non atteints</option>
        <option value="">Ne sait pas</option>
      </select>

      <select>
        <option value="">Par catégorie</option>
        <option value="">Gestion de l'énergie</option>
        <option value="">Gestion de l'eau</option>
        <option value="">Gestion des déchets</option>
        <option value="">Biodiversité</option>
        <option value="">Communication et sensibilisation</option>
        <option value="">Responsabilité sociale</option>
      </select>

      <select>
        <option value="">Par date</option>
        <option value="all">Tous</option>
        <option value="week">Cette semaine</option>
        <option value="month">Ce mois</option>
        <option value="year">Cette année</option>
      </select>
    </form>
  );
}
