import React from "react";
import "./Link.scss";

export enum LinkDisplays {
  primary = "primary",
  secondary = "secondary",
}

interface Props extends React.LinkHTMLAttributes<HTMLHyperlinkElementUtils> {
  display?: LinkDisplays;
}
const Link: React.FC<Props> = ({
  display = LinkDisplays.primary,
  href,
  children,
  ...linkProps
}) => {
  return (
    <a className={`link link__${display}`} {...linkProps}>
      {children}
    </a>
  );
};

export default Link;
