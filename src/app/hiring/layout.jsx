import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <header>Hiring Header</header>
      <body>{children}</body>
      <footer>Hiring Footer</footer>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};
