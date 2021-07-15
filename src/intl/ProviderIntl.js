/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import Languages from './Languages';

const ProviderIntl = ({ children, locale }) => {
  return (
    <IntlProvider
      textComponent={Fragment}
      locale={locale}
      messages={Languages[locale]}>
      {children}
    </IntlProvider>
  );
};

export default ProviderIntl;
