import React from "react";
import Image from "next/image";

// Icons
import { RiArrowDownSLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";

// Images
import Logo from "../assets/logo.png";

// Types
import { NavbarItem } from "../types/types";

interface NavbarProps {
  navbarItems: NavbarItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navbarItems }) => {
  return (
    <div className="flex bg-white h-[3rem] rounded-full my-5 items-center p-2 justify-between">
      <Image src={Logo} alt="Logo" height={150} width={150} />
      <div className="lg:hidden">
        <HiOutlineMenu size={20} color="#220045" />
      </div>
      <div className="hidden lg:flex flex-row gap-4">
        {navbarItems.map((navbarItem) => (
          <div
            className={`flex flex-row items-center cursor-pointer ${
              navbarItem.isButton ? "text-white" : "text-dark-purple"
            } text-sm ${
              !navbarItem.hasDropdown &&
              !navbarItem.isButton &&
              "hover:border-b hover:border-dark-purple"
            } ${
              navbarItem.isButton &&
              "bg-blue-purple px-3 py-1 rounded-full text-white"
            }`}
            key={navbarItem.label}
          >
            <span className="text-ellipsis line-clamp-1">
              {navbarItem.label}
            </span>
            {navbarItem.hasDropdown && <RiArrowDownSLine size={20} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
