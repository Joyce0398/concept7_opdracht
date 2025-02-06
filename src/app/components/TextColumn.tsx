import React from "react";

// Icons
import { FaCheck } from "react-icons/fa6";

// Types
import { ListSectionProps } from "../types/types";

const ListSection: React.FC<ListSectionProps> = ({ title, items }) => (
  <div className="flex flex-col gap-2">
    <span className="font-bold">{title}</span>
    {items.map((item) => (
      <div className="flex flex-row gap-2 text-sm" key={item}>
        <FaCheck size={20} color="#3559FE" className="flex-shrink-0" />
        {item}
      </div>
    ))}
  </div>
);

interface TextColumnProps {
  className: string;
  list: string[];
  list2: string[];
}

const TextColumn: React.FC<TextColumnProps> = ({ className, list, list2 }) => {
  return (
    <div className={`flex flex-col w-[50%] gap-7 ${className} p-4`}>
      <span className="text-3xl">Inhoud</span>
      <span className="text-sm">
        Klaar om een duik te nemen in de wereld van User Experience (UX)?
        Tijdens deze basistraining leer je de fijne kneepjes van het vak, zodat
        jij producten of diensten maakt die ontstaan zijn vanuit de
        daadwerkelijke behoeften van je doelgroep.
      </span>

      <ListSection title="Voor wie is deze training geschikt?" items={list} />
      <ListSection title="Dit leer je in deze training" items={list2} />
    </div>
  );
};

export default TextColumn;
