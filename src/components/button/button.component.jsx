import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSNAME = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSNAME.base) =>
  ({
    [BUTTON_TYPE_CLASSNAME.base]: BaseButton,
    [BUTTON_TYPE_CLASSNAME.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSNAME.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
