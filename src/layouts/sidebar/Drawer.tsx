import React, { useState } from "react";
import clsx from "clsx";
import SimpleBar from "simplebar-react";

interface PropsBasic {
  title?: string;
  className?: any;
  children?: React.ReactNode;
}

interface Props {
  width: number;
  fixed: boolean;
  className: any;
  sidebarToggle: object;
  theme: string;
  children?: React.ReactNode;
  content?: React.ReactNode;
}

const DrawerToggle: React.FC<any> = ({ className, collapseSidebar, click }) => {
  return (
    <a
      href="#toggle"
      className={clsx("", {
        "cu-drawer-toggle": collapseSidebar,
        [`${className}`]: className,
      })}
      onClick={(ev) => {
        ev.preventDefault();
        click(ev);
      }}
    >
        Drawer
    </a>
  );
};

export const DrawerHeader: React.FC<PropsBasic> = ({ className, ...props }) => {
  const classes = clsx(
    "cu-drawer-content-heading tw-cu-text-heading-20 tw-pl-[18px] tw-pr-[25px] tw-pb-[16px] tw-pt-[26px]",
    {
      [`${className}`]: className,
    }
  );
  return (
    <div className={classes}>{props.title ?? <h4>{props.children}</h4>}</div>
  );
};

export const DrawerMenuContent: React.FC<PropsBasic> = ({
  className,
  ...props
}) => {
  const classes = clsx({
    [`${className}`]: className,
  });
  return (
    <SimpleBar className="cu-drawer-sidebar-menu" autoHide={true}>
      <div className={classes}>{props.children}</div>
    </SimpleBar>
  );
};

const Drawer: React.FC<Props> = ({ width, fixed, className, ...props }) => {
  const [collapseSidebar, setSidebar] = useState(false);

  const toggleCollapse = () => {
    setSidebar(!collapseSidebar);
  };

  return (
    <div className="cu-drawer">
      <div
        className={clsx(`cu-drawer-menu`, {
          "cu-drawer-animated": true,
          "cu-drawer-fixed": fixed,
          "cu-drawer-compact": collapseSidebar,
          [`${className}`]: className,
        })}
        style={{
          width: width + "px",
        }}
      >
        <div className="cu-drawer-sticky">
          {props.sidebarToggle && (
            <div className="cu-drawer-head tw-flex">
              {/*{TooltipUIUtil.renderTooltipCustom(*/}
              {/*  <DrawerToggle*/}
              {/*    className={clsx(`cu-drawer-toggle`, {*/}
              {/*      "cu-drawer-animated": true,*/}
              {/*      "cu-drawer-compact": collapseSidebar,*/}
              {/*    })}*/}
              {/*    collapseSidebar={collapseSidebar}*/}
              {/*    click={toggleCollapse}*/}
              {/*    icon="menu"*/}
              {/*  />,*/}
              {/*  collapseSidebar ? "Mở rộng" : "Thu gọn",*/}
              {/*  "right", 15, 50*/}
              {/*)}*/}
            </div>
          )}
          <div className={clsx("cu-drawer-menu-content", {})}>
            {props.children}
          </div>
        </div>
      </div>

      <div
        className={clsx(`cu-drawer-wrap cu-content-body`, {
          "cu-drawer-animated": true,
          "cu-drawer-compact": collapseSidebar,
        })}
        style={{
          paddingLeft: width + "px",
        }}
      >
        {props.content}
      </div>
    </div>
  );
};
export default React.memo(Drawer);
