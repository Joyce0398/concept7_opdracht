import React from "react";

interface MenuProps {
  menuItems: string[];
}

const Menu: React.FC<MenuProps> = ({ menuItems }) => {
  return (
    <div className="flex flex-row justify-start items-end h-[75px] md:gap-10 gap-3 px-6 lg:px-10 shadow-lg bg-white">
      {menuItems.map((menuItem) => (
        <span
          className="text-dark-purple font-medium text-sm md:text-lg hover:border-b-2 hover:border-blue-purple cursor-pointer line-clamp-1 text-ellipsis"
          key={menuItem}
        >
          {menuItem}
        </span>
      ))}
    </div>
  );
};

export default Menu;
