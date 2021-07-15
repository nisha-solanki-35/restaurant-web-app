import React, { useEffect } from 'react';
import Categories from '../json/Categories.json';
import '../assets/scss/style.scss';
import ProductList from '../components/ProductList';
import { useDispatch } from 'react-redux';
import { setCategory } from '../services/actions/action';
import { NavLink } from 'reactstrap';
import { useQueryState } from 'react-router-use-location-state';

const Items = () => {
  const [categoryURL, setcategoryURL] = useQueryState('category', 1);
  const [subcategoryURL, setsubcategoryURL] = useQueryState('subcategory', 7);
  const dispatch = useDispatch();

  const categories = (id, categoryName) => {
    setcategoryURL(id);
    const ID = Categories.categories.find((category) => category.parent === id);
    setsubcategoryURL(ID.id);
    dispatch(setCategory(categoryName));
  };

  const subCategories = (id) => {
    setsubcategoryURL(id);
  };

  useEffect(() => {
    setcategoryURL(categoryURL);
    setsubcategoryURL(subcategoryURL);
  }, []);

  useEffect(() => {
    setcategoryURL(categoryURL);
    setsubcategoryURL(subcategoryURL);
  }, [categoryURL, subcategoryURL]);

  return (
    <div>
      <div className="menu">
        {Categories.categories.map((item, index) =>
          item.parent === null ? (
            <NavLink
              className={`Category-Main-Title ${
                categoryURL === item.id ? 'Category-Main-Title-Active' : null
              }`}
              key={index}
              onClick={() => categories(item.id, item.name)}>
              {item.name}
            </NavLink>
          ) : null,
        )}
      </div>
      <div className="Category-Main-Subitems">
        {categoryURL &&
          Categories.categories.map((item, index) =>
            item.parent === categoryURL ? (
              <p
                className={`Category-Main-Subitem ${
                  subcategoryURL === item.id
                    ? 'Category-Main-Subitem-Active'
                    : null
                }`}
                key={index}
                onClick={() => subCategories(item.id)}>
                {item.name}
              </p>
            ) : null,
          )}
      </div>

      <ProductList url={subcategoryURL} />
    </div>
  );
};

export default Items;
