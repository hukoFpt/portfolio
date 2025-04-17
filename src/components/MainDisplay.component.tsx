import { useState, useEffect } from "react";
import { TabBar } from "./main-display/TabBar.component";
import Blank from "./main-display/content/Blank.component";
import Terminal from "./main-display/Terminal.component";
import Main from "./main-display/content/Main.component";
import About from "./main-display/content/About.component";

type Props = {
  data: string | null;
  setActiveEntity: (entity: string | null) => void; // Function to update activeEntity in the parent
};

export const MainDisplay = ({ data, setActiveEntity }: Props) => {
  const [tabs, setTabs] = useState<{ id: string; label: string }[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");

  useEffect(() => {
    if (data && !tabs.find((tab) => tab.id === data)) {
      setTabs((prevTabs) => [...prevTabs, { id: data, label: data }]);
      setActiveTab(data);
    }
  }, [data]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setActiveEntity(tabId); // Update activeEntity in the parent
  };

  const handleCloseTab = (tabId: string) => {
    setTabs((prevTabs) => prevTabs.filter((tab) => tab.id !== tabId));
    if (activeTab === tabId) {
      const remainingTabs = tabs.filter((tab) => tab.id !== tabId);
      const newActiveTab = remainingTabs[remainingTabs.length - 1]?.id || "";
      setActiveTab(newActiveTab);
      setActiveEntity(newActiveTab || null); // Update activeEntity in the parent
    }
  };

  return (
    <div className="flex flex-col bg-[#1f1f1f] text-white w-5/6">
      <TabBar
        tabs={tabs}
        activeTab={activeTab}
        onTabClick={handleTabClick}
        onCloseTab={handleCloseTab}
      />
      <div className="flex-grow overflow-auto">
        {activeTab ? (
          (() => {
            switch (activeTab) {
              case "main.tsx":
                return <Main />;
              case "index.tsx":
                return <About />;
              case "settings":
                return <p className="text-lg">Adjust your Settings here.</p>;
              default:
                return <p className="text-lg">Content for: {activeTab}</p>;
            }
          })()
        ) : (
          <Blank />
        )}
      </div>
      <Terminal />
    </div>
  );
};
