import { Providers } from "./providers";
import "../styles/globals.css";
import PropTypes from "prop-types";

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
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
