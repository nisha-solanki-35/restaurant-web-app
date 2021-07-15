import React from 'react';
import PropTypes from 'prop-types';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { itemTobeRemove, setshowViewBasket } from '../services/actions/action';
import ProviderIntl from '../intl/ProviderIntl';
import translate from '../intl/Translate';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
const Checkout_item = (props) => {
  const locale = useSelector((state) => state.lan.locale);
  const order = useSelector((state) => state.foodDetails.order);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleRemoveItems = (orderIndex) => {
    if (order.length == 1) {
      history.push('/categories');
      dispatch(setshowViewBasket());
    }
    dispatch(itemTobeRemove(orderIndex));
  };

  return (
    <div className="checkout-selected-item">
      <ProviderIntl locale={locale}>
        <div className="item-left">
          <b>
            {props.numberOfItems} x {props.itemname}
          </b>
          <br></br>
          <span>{props.variantName}</span>
          {props.ingredients
            ? props.ingredients.map((ingredient, index) => (
                <span key={index}>
                  {', '}
                  {ingredient}{' '}
                </span>
              ))
            : null}
        </div>

        <div className="item-right">
          <b>
            {translate('currency')}
            {props.price.toFixed(2)}
          </b>
          {props.deleteicon && (
            <span>
              <IoMdRemoveCircleOutline
                size={30}
                color={'red'}
                onClick={() => handleRemoveItems(props.orderIndex)}
              />
            </span>
          )}
        </div>
      </ProviderIntl>
    </div>
  );
};

Checkout_item.propTypes = {
  title: PropTypes.string,
  orderIndex: PropTypes.number,
  itemname: PropTypes.string,
  variantName: PropTypes.string,
  numberOfItems: PropTypes.number,
  ingredients: PropTypes.array,
  price: PropTypes.number,
  handleRemoveItems: PropTypes.func,
  deleteicon: PropTypes.bool,
};

export default Checkout_item;
