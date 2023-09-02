import React, { useState } from "react";
import clsx from "clsx";
import SimpleBar from "simplebar-react";
import SidebarFooter from "./SidebarFooter";
import Toggle from "./Toggle";

interface Props {
  fixed: boolean;
  className: any;
  sidebarToggle: object;
  theme: string;
}

const Sidebar: React.FC<Props> = ({ fixed, className, sidebarToggle }) => {
  const [collapseSidebar, setSidebar] = useState(false);
  const [mouseEnter, _setMouseEnter] = useState(false);
  const [theme, setTheme] = useState("dark");

  const toggleCollapse = () => {
    setSidebar(!collapseSidebar);
  };

  const classes = clsx({
    "cu-sidebar": true,
    "cu-sidebar-fixed": fixed,
    "is-compact": collapseSidebar,
    "has-hover": collapseSidebar && mouseEnter,
    [`is-light`]: theme === "white",
    [`is-${theme}`]: theme !== "white" && theme !== "light",
    [`${className}`]: className,
  });

  return (
    <div className={classes}>
      <div
        className="cu-sidebar-element cu-sidebar-head tw-flex tw-justify-center tw-h-[52px]"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        Slide bar
        <SidebarFooter collapseSidebar={collapseSidebar} setTheme={setTheme} />
      </div>
    </div>
  );
}
export default React.memo(Sidebar)
