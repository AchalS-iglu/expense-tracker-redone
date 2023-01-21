import React, { ReactElement, useState } from "react";
import { FiDollarSign } from "react-icons/fi";
import { GiIgloo } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";
import { Turn as Hamburger } from "hamburger-react";
import Link from "next/link";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Theme_t } from "@/models/misc";
import useDarkSide from "@/hooks/useDarkSide";

const SideBar = () => {
  const { colorTheme, setTheme } = useDarkSide();
  const [darkSide, setDarkSide] = useState<boolean>(
    colorTheme === Theme_t.Light ? true : false
  );

  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkSide(!darkSide);
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col flex-1 dark:bg-slate-900 dark:text-white bg-slate-400 text-black shadow-lg">
      <div>
        <Link href={"/"}>
          {/* <SideBarIcon icon={<GiIgloo size="40" />} /> */}
          <GiIgloo
            className="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-slate-900 text-cyan-200 rounded-md cursor-pointer;"
            size="32"
          />
        </Link>
        <Link href={"/expenses"}>
          <SideBarIcon icon={<FiDollarSign size="36" />} tooltip={"Expenses"} />
        </Link>
        <Link href={"/analytics"}>
          <SideBarIcon
            icon={
              <MdShowChart
                size="32"
                style={{
                  WebkitTransform: "scaleY(-1)",
                  transform: "scaleY(-1)",
                }}
              />
            }
            tooltip={"Analytics"}
          />
        </Link>
      </div>
      <div
        style={{
          marginTop: "auto",
        }}
      >
        <SideBarIcon
          icon={
            <DarkModeSwitch
              checked={!darkSide}
              onChange={toggleDarkMode}
              size={30}
              color="var(--sidebar-icon-color)"
              sunColor="var(--sidebar-icon-color)"
              moonColor="var(--sidebar-icon-color)"
            />
          }
          onClick={toggleDarkMode}
          tooltip={darkSide !== true ? "Dark Mode" : "Light Mode"}
        />
        <SideBarIcon icon={<FaUser size="28" />} tooltip={"Profile"} />
        <SideBarIcon
          icon={
            <Hamburger direction="left" size={28} />
            // <i className="button-hb" aria-expanded={!hbOpen} onClick={
            //   () => setHbOpen(!hbOpen)
            // }>
            //   <svg
            //     className="hamburger"
            //     fill="var(--hb-color)"
            //     stroke="var(--hb-color)"
            //     viewBox="0 0 100 100"
            //     width="36"
            //   >
            //     <line
            //       className="line top"
            //       x1={92}
            //       x2={8}
            //       y1={40}
            //       y2={40}
            //       strokeWidth={10}
            //       stroke-strokeLinecap="round"
            //       stroke-strokeDasharray={80}
            //       stroke-strokeDashoffset={0}
            //     ></line>
            //     <line
            //       className="line bottom"
            //       x1={8}
            //       x2={92}
            //       y1={60}
            //       y2={60}
            //       strokeWidth={10}
            //       stroke-strokeLinecap="round"
            //       stroke-strokeDasharray={80}
            //       stroke-strokeDashoffset={0}
            //     ></line>
            //   </svg>
            // </i>
          }
          tooltip={"Settings"}
        />
      </div>
    </div>
  );
};

const SideBarIcon = ({
  icon,
  tooltip,
  onClick,
}: {
  icon: ReactElement;
  tooltip?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className="sidebar-icon group"
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {icon}
      {tooltip ? (
        <span className="sidebar-tooltip group-hover:scale-100">{tooltip}</span>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SideBar;
