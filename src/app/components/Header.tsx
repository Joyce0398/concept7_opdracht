import React from "react";
import Image from "next/image";

// Components
import Breadcrumb from "./Breadcrumb";
import Navbar from "./Navbar";
import Menu from "./Menu";
import HeaderContent from "./HeaderContent";
import InfoList from "./InfoList";

// Images
import Photo1 from "../assets/photo_1.png";

// Data
import {
  breadcrumbList,
  infoItems,
  menuItems,
  navbarItems,
} from "../data/data";

const Header: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      <div className="bg-dark-purple bg-cover">
        <div className="px-6 lg:px-10">
          <Navbar navbarItems={navbarItems} />
          <Breadcrumb breadcrumbs={breadcrumbList} />
        </div>
        <div className="max-w-[80%] mx-auto">
          <HeaderContent title="Basiscursus UX Design" />
          <InfoList infoItems={infoItems} />
        </div>
        <div className="px-6 lg:px-10">
          <Image src={Photo1} alt="Promo Image" />
        </div>
        <Menu menuItems={menuItems} />
      </div>
    </div>
  );
};

export default Header;
