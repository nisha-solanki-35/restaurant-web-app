import React from 'react';
import PropTypes from 'prop-types';
import products from '../json/products.json';
import '../assets/scss/style.scss';
import PopupSelected from './PopupSelected';
import { useDispatch, useSelector } from 'react-redux';
import { addSelecteditem } from '../services/actions/action';
import Footer from './Footer';
import { useHistory } from 'react-router';
import ProviderIntl from '../intl/ProviderIntl';
import translate from '../intl/Translate';

const ProductList = ({ url }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state.foodDetails.selected_food);
  const showPopup = useSelector((state) => state.foodDetails.showPopup);
  const totalBill = useSelector((state) => state.foodDetails.totalBill);
  const order = useSelector((state) => state.foodDetails.order);
  const showViewBasket = useSelector(
    (state) => state.foodDetails.showViewBasket,
  );
  const locale = useSelector((state) => state.lan.locale);

  const gotoCheckoutPage = () => {
    history.push('/checkout');
  };

  const addItem = (product) => {
    dispatch(addSelecteditem(product));
  };

  return (
    <div>
      <ProviderIntl locale={locale}>
        {products.products.map((product, index) =>
          product.parentId === url ? (
            <div
              key={index}
              className="Product-item"
              onClick={() => addItem(product)}>
              <span className="Product-item-name">{product.name}</span>
              <br></br>
              <p className="Product-item-price">
                {translate('currency')}
                {product.price}
              </p>
              <span className="Product-item-desc">{product.description}</span>
            </div>
          ) : null,
        )}
        {showPopup && <PopupSelected product={state} />}
        {showViewBasket && (
          <Footer
            title={translate('view_basket')}
            value={totalBill}
            itemCount={order.length}
            handleOnclick={gotoCheckoutPage}
            sl={true}
          />
        )}
      </ProviderIntl>
    </div>
  );
};

ProductList.propTypes = {
  url : PropTypes.number
};

export default ProductList;
