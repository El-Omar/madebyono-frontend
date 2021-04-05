import { useEffect, useState } from "react";

const Categories = ({ categories, filter }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="w-100 categories__wrapper">
      <button className={`btn--category${selectedCategory === "" ? " active" : ""}`} 
        onClick={() => {
          setSelectedCategory("")
          filter("")
        }}>All</button>

      {categories.map(({ category }, i) => 
        <button className={`btn--category${selectedCategory === category ? " active" : ""}`} 
          key={i} onClick={() => {
          setSelectedCategory(selectedCategory === category ? "" : category)
          filter(selectedCategory === category ? "" : category.toLowerCase())
        }}>{category}</button>
      )}
    </div>
  );
};

export default Categories;