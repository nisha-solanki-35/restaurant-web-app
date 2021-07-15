import React, { useState } from 'react';
import '../assets/scss/style.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  addOrderToBasket,
  removeExistingItem,
  setextras,
  setNumberOfItems,
  setShowPopup,
  setVariant,
  setExtraPrice,
  resetSelectedItems,
} from '../services/actions/action';
import ProviderIntl from '../intl/ProviderIntl';
import translate from '../intl/Translate';
import { motion } from 'framer-motion';
import { GrFormClose } from 'react-icons/gr';

const PopupSelected = ({ product }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.foodDetails.id);
  const category = useSelector((state) => state.foodDetails.category);
  const numberOfItems = useSelector((state) => state.foodDetails.numberOfItems);
  const itemname = useSelector((state) => state.foodDetails.itemname);
  const price = useSelector((state) => state.foodDetails.price);
  const extras = useSelector((state) => state.foodDetails.extras);
  const extrasPrice = useSelector((state) => state.foodDetails.extrasPrice);
  const locale = useSelector((state) => state.lan.locale);
  const variantName = useSelector((state) => state.foodDetails.variantName);
  // const variantPrice = useSelector((state) => state.foodDetails.variantPrice);
  const [active, setactive] = useState(0);
  const order = useSelector((state) => state.foodDetails.order);

  const addItems = (event, name, extraprice) => {
    if (event.target.checked === true) {
      dispatch(setextras(name, true));
      dispatch(setExtraPrice(extraprice, true));
    } else if (event.target.checked === false) {
      dispatch(setextras(name, false));
      dispatch(setExtraPrice(extraprice, false));
    }
  };

  const handleVariant = (variants, index) => {
    setactive(index);
    dispatch(setVariant(variants));
  };

  const addViewBasketButton = () => {
    order.length === 0
      ? dispatch(
          addOrderToBasket({
            id,
            category,
            numberOfItems,
            itemname,
            price: (price + extrasPrice) * numberOfItems,
            extras,
            variantName,
          }),
        )
      : checkOrderQuantity(),
      dispatch(setShowPopup());
  };

  const checkOrderQuantity = () => {
    const oldItem = order.filter(
      (item) =>
        item.category === category &&
        item.itemname === itemname &&
        item.variantName === variantName &&
        item.extras.length === extras.length &&
        JSON.stringify(item.extras) === JSON.stringify(extras),
    )[0];
    console.log(oldItem);
    if (oldItem !== undefined) {
      return dispatch(
        addOrderToBasket({
          id,
          category,
          numberOfItems: numberOfItems + oldItem.numberOfItems,
          itemname,
          price:
            (price + extrasPrice) * (oldItem.numberOfItems + numberOfItems),
          extras,
          variantName,
        }),
        dispatch(removeExistingItem(id)),
      );
    } else {
      return dispatch(
        addOrderToBasket({
          id,
          category,
          numberOfItems,
          itemname,
          price: (price + extrasPrice) * numberOfItems,
          extras,
          variantName,
        }),
      );
    }
  };

  return (
    <div className="PopupSelected-Container">
      <ProviderIntl locale={locale}>
        <motion.div
          className="PopupSelected-Container-Inner"
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.8,
            type: 'tween',
            stiffness: 80,
          }}>
          <div className="PopupSelected-Name">
            <h2>{product.name}</h2>
            <GrFormClose
              size={35}
              className="PopupSelected-Close-Icon"
              onClick={() => dispatch(resetSelectedItems())}
            />
            <hr></hr>
          </div>

          {product.variants ? (
            <div className="PopupSelected-Size">
              <p>{translate('size')}</p>
              {product.variants.map((variants, index) => (
                <div
                  onClick={() => handleVariant(variants, index)}
                  key={index}
                  className={`PopupSelected-Size-Container ${
                    active === index
                      ? 'PopupSelected-Size-Container-active'
                      : null
                  }`}>
                  <span
                    key={index + 2}
                    className="PopupSelected-Size-Container-Left">
                    {variants.name}
                  </span>
                  <span
                    key={index + 3}
                    className="PopupSelected-Size-Container-Right">
                    {translate('currency')}
                    {variants.price}
                  </span>
                </div>
              ))}
              <hr></hr>
            </div>
          ) : null}

          {product.extras && (
            <div className="PopupSelected-Extra">
              <p>{translate('select_option')}</p>
              {product.extras.map((extras, index) => (
                <div key={index}>
                  <span key={index + 4}>
                    {extras.name} (+ {translate('currency')}
                    {extras.price})
                  </span>
                  <label className="Container-Checkbox">
                    <input
                      type="checkbox"
                      value={extras}
                      onChange={(e) => addItems(e, extras.name, extras.price)}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              ))}
              <hr></hr>
            </div>
          )}

          <div className="PopupSelected-Counter">
            <p
              className="PopupSelected-Counter-Sign"
              onClick={() =>
                numberOfItems === 1
                  ? dispatch(setNumberOfItems(1))
                  : dispatch(setNumberOfItems(numberOfItems - 1, false))
              }>
              -
            </p>
            <p className="PopupSelected-Counter-No">{numberOfItems}</p>
            <p
              className="PopupSelected-Counter-Sign"
              onClick={() =>
                dispatch(setNumberOfItems(numberOfItems + 1, true))
              }>
              +
            </p>
          </div>
          <button className="PopupSelected-Btn" onClick={addViewBasketButton}>
            {translate('add_order')}
          </button>
        </motion.div>
      </ProviderIntl>
    </div>
  );
};

PopupSelected.propTypes = {
  product: PropTypes.object,
  numberOfItems: PropTypes.number,
  setnumberOfItems: PropTypes.func,
};

export default PopupSelected;
