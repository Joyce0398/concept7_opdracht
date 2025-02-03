import React from "react";
import Image from "next/image";

// Images
import Rating from "../assets/rating.png";

// Types
import { InfoItem } from "../types/types";

interface Card {
  className: string;
  infoItems: InfoItem[];
}

const Card: React.FC<Card> = ({ className, infoItems }) => {
  return (
    <div className={`${className}`}>
      <div className={`flex flex-col bg-dark-purple text-white p-6 mb-5 gap-4`}>
        <div className="flex flex-row gap-2">
          <span className="text-lg font-semibold line-clamp-1">
            Basis UX Design
          </span>
          <Image src={Rating} alt="Rating" width={50} height={10} />
        </div>
        <div className="flex flex-col gap-3 pt-2 pb-2 border-b border-t border-dark-gray">
          {infoItems.map((infoItem) => (
            <div
              className="flex flex-row justify-between text-xs"
              key={infoItem.label}
            >
              <span className="font-semibold">{infoItem.label}</span>
              <span>{infoItem.value}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center items-center">
          <button className="bg-blue-purple rounded-full px-4 py-2 text-sm font-semibold">
            Bestel online cursus
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-sm text-dark-purple gap-1">
        <span>Volg je deze training liever op locatie?</span>
        <a href="/training" className="underline font-bold">
          Bekijk fysieke training
        </a>
      </div>
    </div>
  );
};

export default Card;
