"use client";

import { ThemeProvider } from "next-themes";
import PropTypes from "prop-types";
import CustomIntlProvider from "../i18n/IntlProvider";

export const Providers = ({ children }) => {
  return (
    <CustomIntlProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </CustomIntlProvider>
  );
};

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};
