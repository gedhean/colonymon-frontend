import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// third-party
import { IntlProvider } from 'react-intl';

// project import
import useConfig from 'hooks/useConfig';

// load locales files
const loadLocaleData = (i18n) => {
  if (i18n === 'pt') return import('utils/locales/pt.json');
  if (i18n === 'en') return import('utils/locales/en.json');

  return import('utils/locales/pt.json');
};

// ==============================|| LOCALIZATION ||============================== //

const Locales = ({ children }) => {
  const { i18n } = useConfig();

  const [messages, setMessages] = useState();

  useEffect(() => {
    loadLocaleData(i18n).then((d) => {
      setMessages(d.default);
    });
  }, [i18n]);

  return (
    <>
      {messages && (
        <IntlProvider locale={i18n} defaultLocale="pt" messages={messages}>
          {children}
        </IntlProvider>
      )}
    </>
  );
};

Locales.propTypes = {
  children: PropTypes.node
};

export default Locales;
