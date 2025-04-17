import Image from "next/image";
import { VscChevronDown } from "react-icons/vsc";

type Props = {
  tab: number;
  name: string;
  type: string;
  isActivated: boolean;
  onClick: () => void;
  icon?: string;
  isOpen?: boolean;
  isSubEntity?: boolean;
};

export const Entity = ({
  tab,
  name,
  type,
  isActivated,
  onClick,
  icon,
  isOpen,
  isSubEntity,
}: Props) => {
  return (
    <div
      className={`flex items-center cursor-pointer py-0.5 px-5 ${
        isActivated ? "bg-zinc-700" : ""
      }`}
      style={{ paddingLeft: `${1 + tab * 1}rem` }}
      onClick={onClick}
    >
      {type === "folder" && (
        <>
          <VscChevronDown
            size={16}
            className={`mr-1 transform transition-transform duration-200 ${
              isOpen ? "rotate-0" : "-rotate-90"
            }`}
          />
          <Image
            src={icon || "/folder.icon.png"}
            alt={name}
            width={16}
            height={16}
            className="inline-block mr-1"
          />
        </>
      )}
      {type === "file" && (
        <div className="flex relative">
          {isSubEntity && (
            <div className="absolute h-[28px] w-[1px] bg-neutral-400 -left-2.5 top-1/2 transform -translate-y-1/2" />
          )}
          <Image
            src={icon || "/file.icon.png"}
            alt={name}
            width={16}
            height={16}
            className="inline-block mr-1"
          />
        </div>
      )}
      <p className="">{name}</p>
    </div>
  );
};
