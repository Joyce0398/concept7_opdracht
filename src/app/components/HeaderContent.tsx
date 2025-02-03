import React from "react";

// Data
import { valuePropositions } from "../data/data";

// Icons
import { FaCheck } from "react-icons/fa6";
import { RiArrowRightLine } from "react-icons/ri";

interface HeaderContentProps {
  title: string;
}

const HeaderContent: React.FC<HeaderContentProps> = ({ title }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-20 items-start my-20 overflow-scroll">
      <div className="flex flex-col text-white">
        <span className="text-md font-semibold">Online cursus</span>
        <h1 className="text-5xl font-medium">{title}</h1>
      </div>
      <div className="flex flex-col gap-4 text-white">
        {valuePropositions.map((valueProposition, index) => (
          <div key={index} className="flex items-center gap-2">
            <FaCheck className="text-blue-purple" size={20} />
            <span className="text-sm">{valueProposition}</span>
          </div>
        ))}
        <div className="flex flex-row pt-5 gap-4">
          <button className="bg-blue-purple rounded-full text-sm font-semibold w-48 px-3 py-2 cursor-pointer">
            Bestel een online cursus
          </button>
          <button className="flex items-center text-sm rounded-full w-52 gap-1 cursor-pointer">
            Bekijk de cursus
            <RiArrowRightLine className="text-blue-purple" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
