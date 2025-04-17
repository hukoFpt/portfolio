import Image from "next/image";
import { MdClose } from "react-icons/md";

type Tab = {
  id: string;
  label: string;
};

type Props = {
  tabs: Tab[]; // Array of tabs
  activeTab: string; // Currently active tab
  onTabClick: (tabId: string) => void; // Callback when a tab is clicked
  onCloseTab: (tabId: string) => void; // Callback when a tab is closed
};

export const TabBar = ({ tabs, activeTab, onTabClick, onCloseTab }: Props) => {
  return (
    <div className="flex items-center bg-neutral-900">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`group flex items-center px-2 py-2 cursor-pointer border-r border-neutral-700 ${
            activeTab === tab.id
              ? "bg-[#1f1f1f] text-white border-t border-t-sky-600"
              : "text-neutral-400 hover:bg-[#1f1f1f] border-b"
          }`}
        >
          <Image
            src="/react-ts.icon.png"
            alt="Logo"
            width={16}
            height={16}
            className="mr-2"
          />
          <span onClick={() => onTabClick(tab.id)}>{tab.label}</span>
          <button
            className={`ml-2 p-0.5 rounded cursor-pointer ${
              activeTab === tab.id
                ? "text-white"
                : "text-transparent group-hover:text-neutral-500"
            } hover:bg-[#313232]`}
            onClick={(e) => {
              e.stopPropagation();
              onCloseTab(tab.id);
            }}
          >
            <MdClose size={16} />
          </button>
        </div>
      ))}
      <div className="flex-grow h-full border-b border-neutral-700" />
    </div>
  );
};
