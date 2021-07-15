import React from 'react';
import Thumb from '../assets/icons/Thumb.png';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProviderIntl from '../intl/ProviderIntl';
import translate from '../intl/Translate';
import { useSelector } from 'react-redux';

const Popup = (props) => {
  const locale = useSelector((state) => state.lan.locale);
  return (
    <div className="Checkout-Popup">
      <ProviderIntl locale={locale}>
        <motion.div
          className="Checkout-Popup-Inner"
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          transition={{
            duration: 2,
            type: 'spring',
            stiffness: 330,
          }}>
          <br></br>
          <h4>
            <b>{translate('confirm_order')}</b>
          </h4>
          <img src={Thumb}></img>
          <p>{translate('popup_details')} </p>
          <button className="Btn-Cancel" onClick={props.handleShow}>
            {translate('cancel')}
          </button>
          <Link to="/order">
            <button className="Btn-Place-Order">
              {translate('place_order')}
            </button>
          </Link>
        </motion.div>
      </ProviderIntl>
    </div>
  );
};

Popup.propTypes = {
  handleShow: PropTypes.func,
};

export default Popup;
