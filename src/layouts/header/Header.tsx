import clsx from "clsx";
import React from "react";
import Toggle from "../sidebar/Toggle";

// Menu data
import { Link, useLocation } from "react-router-dom";

const Header: React.FC<any> = ({
  fixed,
  theme,
  className,
  setVisibility,
  ...props
}) => {
  const location = useLocation();

  const headerClass = clsx({
    "cu-header": true,
    "cu-header-fixed": fixed,
    [`is-light`]: theme === "white",
    [`is-${theme}`]: theme !== "white" && theme !== "light",
    [`${className}`]: className,
  });
  
  return (
    <div className={`${headerClass} tw-h-[52px]`}>
      HEADER
    </div>
  );
};
export default Header;
