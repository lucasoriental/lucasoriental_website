import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <header>Hiring Header</header>
      <section>{children}</section>
      <footer>Hiring Footer</footer>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
