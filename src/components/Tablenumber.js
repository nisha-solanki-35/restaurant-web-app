import React from 'react';
import ProviderIntl from '../intl/ProviderIntl';
import translate from '../intl/Translate';
import { useSelector, useDispatch } from 'react-redux';
import { setTablenumber } from '../services/actions/action';
import PropTypes from 'prop-types';

const Tablenumber = ({ showTablenumber }) => {
  const locale = useSelector((state) => state.lan.locale);
  const dispatch = useDispatch();
  const tableNumber = useSelector((state) => state.foodDetails.tableNumber);

  return (
    <div className="TableNumber">
      <ProviderIntl locale={locale}>
        <p>{translate('table_num')}</p>
        {showTablenumber ? (
          <input value={tableNumber} readOnly></input>
        ) : (
          <input
            type="text"
            pattern="[0-9]"
            maxLength="2"
            value={tableNumber}
            onChange={(event) => dispatch(setTablenumber(event.target.value))}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}></input>
        )}
      </ProviderIntl>
    </div>
  );
};

Tablenumber.propTypes = {
  showTablenumber: PropTypes.bool,
};

export default Tablenumber;
