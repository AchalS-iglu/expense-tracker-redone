"use client";
import React, { ReactElement, useState } from "react";
import { FiDollarSign } from "react-icons/fi";
import { GiIgloo } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";
import { Turn as Hamburger } from "hamburger-react";
import Link from "next/link";

const SideBar = () => {
  const [hbOpen, setHbOpen] = useState<boolean>(false);

  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col flex-1 bg-slate-900 text-white shadow-lg">
      <div>
        <Link href={"/"}>
          <SideBarIcon icon={<GiIgloo size="40" />} />
        </Link>
        <Link href={"/expenses"}>
          <SideBarIcon icon={<FiDollarSign size="36" />} />
        </Link>
        <Link href={'/analytics'}>
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
          />
        </Link>
      </div>
      <div
        style={{
          marginTop: "auto",
        }}
      >
        <SideBarIcon icon={<FaUser size="28" />} />
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
        />
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon }: { icon: ReactElement }) => {
  return (
    <div className="sidebar-icon">
      <i>{icon}</i>
    </div>
  );
};

export default SideBar;
