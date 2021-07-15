import React, { useState } from 'react';
import ProviderIntl from '../intl/ProviderIntl';
import translate from '../intl/Translate';
import { useSelector } from 'react-redux';

const Addnotes = () => {
  const locale = useSelector((state) => state.lan.locale);
  const [notes, setnotes] = useState(null);

  const handleOnchange = (e) =>{
      setnotes(e.target.value)
  }
  return (
    <div className="Checkout-Notes">
      <ProviderIntl locale={locale}>
        <p>{translate('add_notes')}</p>
        <input type="text" value={notes} onChange={e=>handleOnchange(e)} ></input>
      </ProviderIntl>
    </div>
  );
};

export default Addnotes;
