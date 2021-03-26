import { useEffect, useState } from "react";

const Categories = ({ categories, filter }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="w-100 categories__wrapper">
      {categories.map(({ category }, i) => 
        <button className={`btn--category${selectedCategory === category ? " active" : ""}`} 
          key={i} onClick={() => {
          // setSelectedCategory(selectedCategory === category ? "" : category)
          setSelectedCategory(selectedCategory === category ? "" : category)
          filter(selectedCategory === category ? "" : category)
          // setFilterActive(isActive => isActive = !isActive)
        }}>{category}</button>
      )}
    </div>
  );
};

export default Categories;