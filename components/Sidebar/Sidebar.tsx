import Link from "next/link";
import React, { useState } from "react";
import { headerItems } from "../../utils/data";
import ModeSwitch from "./ModeSwitch";
import Profile from "./Profile";
import SidebarLink from "./SidebarLink";
import Socials from "./Socials";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  return (
    <aside
      className="h-full flex-col justify-between items-center bg-primary dark:bg-primary-dark 
                      border-r border-r-highlight md:border-r-secondary dark:border-r-accent-dark flex
                      relative"
    >
      <Profile />
      {/* <div className="flex flex-col justify-center divide-y divide-secondary border-y border-secondary"> */}
      <div className="flex flex-col justify-center">
        {headerItems.map((item, index) => (
          <SidebarLink key={index} item={item} />
        ))}
      </div>
      <ModeSwitch />
      <div className="mb-3">
        <Socials />
      </div>
    </aside>
  );
}
