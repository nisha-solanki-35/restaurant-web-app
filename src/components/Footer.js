import React from 'react';
import PropTypes from 'prop-types';
import ProviderIntl from '../intl/ProviderIntl';
import translate from '../intl/Translate';
import { useSelector } from 'react-redux';

const Footer = (props) => {
  const locale = useSelector((state) => state.lan.locale);
  return (
    <div className="footer" onClick={props.handleOnclick}>
      <ProviderIntl locale={locale}>
        <center>{props.title}</center>
        {props.sl && (
          <center>
            {translate('currency')}
            {props.value.toFixed(2)} / {props.itemCount} {translate('item')}
          </center>
        )}
      </ProviderIntl>
    </div>
  );
};

Footer.propTypes = {
  value: PropTypes.number,
  itemCount: PropTypes.number,
  title: PropTypes.any,
  handleOnclick: PropTypes.func,
  sl: PropTypes.bool,
};
export default Footer;
