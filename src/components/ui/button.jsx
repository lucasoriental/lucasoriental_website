import PropTypes from "prop-types";

export default function Button(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.inverted ? (
        <>
          {props.texto}
          {props.icon && <props.icon />}
        </>
      ) : (
        <>
          {props.icon && <props.icon />}
          {props.texto}
        </>
      )}
    </button>
  );
}

Button.propTypes = {
  texto: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  inverted: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
