import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <>
      <header>Freelancer Header</header>
      <body>{children}</body>
      <footer>Freelancer Footer</footer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};
