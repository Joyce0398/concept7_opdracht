import React from "react";

// Types
import { InfoItem } from "../types/types";

interface infoListProps {
  infoItems: InfoItem[];
}

const InfoList: React.FC<infoListProps> = ({ infoItems }) => {
  return (
    <div className="flex flex-row justify-between text-white my-20">
      {infoItems.map(({ label, value }) => (
        <div key={label} className="flex flex-col">
          <span className="text-xs">{label}</span>
          <span className="md:text-lg text-xs font-semibold">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default InfoList;
