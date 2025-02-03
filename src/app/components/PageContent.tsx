import React from "react";

// Components
import TextColumn from "./TextColumn";
import InfoCard from "./InfoCard";

// Data
import { infoItems, list, list2 } from "../data/data";

const PageContent: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-screen-lg mx-auto px-6 pt-10 pb-10">
      <TextColumn className="md:w-[70%] w-full" list={list} list2={list2} />
      <InfoCard className="md:w-[30%]" infoItems={infoItems} />
    </div>
  );
};

export default PageContent;
