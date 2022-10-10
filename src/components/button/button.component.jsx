import "./button.styles.scss";

const BUTTON_TYPE_CLASSNAME = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSNAME[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
