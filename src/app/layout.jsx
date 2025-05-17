import "@/styles/globals.css";
import PropTypes from "prop-types";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;

RootLayout.propTypes = {
  children: PropTypes.object.isRequired,
};
