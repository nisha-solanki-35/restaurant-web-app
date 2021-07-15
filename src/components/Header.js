import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

const Header = (props) => {

  const history = useHistory();
  return (
    <div className="checkout-header">
      {props.backicon && (
        <MdKeyboardArrowLeft className="Icon-Arrow-Left" size={40} onClick={()=> history.goBack()} />
      )}

      <b>{props.title}</b>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.any,
  backicon: PropTypes.bool,
};

export default Header;
