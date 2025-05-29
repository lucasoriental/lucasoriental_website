import { Providers } from "./providers";
import "../styles/globals.css";
import PropTypes from "prop-types";

import { Geologica } from "@next/font/google";

const geologica = Geologica();

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning className={geologica.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
