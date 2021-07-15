import React from 'react';
import Logo from '../assets/icons/Logo.png';
import { motion } from 'framer-motion';
import ProviderIntl from '../intl/ProviderIntl';
import translate from '../intl/Translate';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

const Totalbill = ({ bill }) => {
  const locale = useSelector((state) => state.lan.locale);
  return (
    <div>
      <ProviderIntl locale={locale}>
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{
            delay: 0.8,
            duration: 2,
            type: 'spring',
            stiffness: 300,
          }}>
          <div className="Checkout-Totalbill">
            <div className="Checkout-Logo">
              <img src={Logo}></img>
            </div>
            <div className="Checkout-Totalbill-info">
              <center>
                <h1>{translate('total_bill')}</h1>
                <h2>
                  {translate('currency')}
                  {bill}
                </h2>
              </center>
            </div>
          </div>
        </motion.div>
      </ProviderIntl>
    </div>
  );
};

Totalbill.propTypes = {
  bill: PropTypes.number,
};

export default Totalbill;
