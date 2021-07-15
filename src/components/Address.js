import React from 'react';
import '../assets/scss/style.scss';
import PropTypes from 'prop-types';

const Address = (props) => {
  return (
    <div>
      <div
        className={`${props.center ? 'category-address' : 'checkout-address'}`}>
        <b>{props.title}</b>
        <br></br>
        <span>134 High Street, Kempston, Bedford, Bedfordshire, MK42 7BN</span>
      </div>
    </div>
  );
};

Address.propTypes = {
  title: PropTypes.string,
  center: PropTypes.bool,
};
export default Address;
