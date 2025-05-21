"use client";

import { IntlProvider } from "next-intl";
import { useLangStore } from "../store/useLangStore";
import { useMemo } from "react";
import PropTypes from "prop-types";

const CustomIntlProvider = ({ children }) => {
  const lang = useLangStore((state) => state.lang);

  const messages = useMemo(() => {
    return require(`../../messages/${lang}.json`);
  }, [lang]);

  return (
    <IntlProvider locale={lang} messages={messages} timeZone="Lisbon/Portugal">
      {children}
    </IntlProvider>
  );
};

export default CustomIntlProvider;

CustomIntlProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
