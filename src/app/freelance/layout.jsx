import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <header>Freelancer Header</header>
      <section>{children}</section>
      <footer>Freelancer Footer</footer>
    </>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
