import React from 'react';
import Address from '../components/Address';
import '../assets/scss/category.scss';
import Items from '../components/Items';
// import PopupSelected from '../components/PopupSelected';

const Category = () => {
  return (
    <div>
      <div>
        <div className="category-container">
          <Address title="Kings Arms Cardington" center={true} />
          <Items />
        </div>
      </div>
    </div>
  );
};

export default Category;
