import React from "react";
import "./Button.scss";

export enum ButtonDisplays {
  primary = "primary",
  secondary = "secondary",
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  display?: ButtonDisplays;
}
const Button: React.FC<Props> = ({
  display = ButtonDisplays.primary,
  children,
  ...buttonProps
}) => (
  <button className={`button button__${display}`} {...buttonProps}>
    {children}
  </button>
);

export default Button;
