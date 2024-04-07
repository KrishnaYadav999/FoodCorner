import React from 'react';
import './Filter.css';

const Filter = ({ onSelectCategory }) => {
  const categories = ["All", "Pure Veg", "Chinese", "Fast Food", "Noodles", "Thai Food", "Indian Food"];

  return (
    <div>
      <div>
        {categories.map(category => (
          <button className='btn-filter' key={category} onClick={() => onSelectCategory(category)}>
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;

