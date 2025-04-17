import { useState } from "react";

const Terminal = () => {
  const [activeTab, setActiveTab] = useState<string>("PROBLEMS");

  return (
    <div className="h-60 bg-neutral-900 text-white px-4 py-2 overflow-y-scroll border-t border-zinc-700">
      {/* Tab Buttons */}
      <div className="flex space-x-6 mb-2 text-xs">
        <button
          className={`flex gap-1 pb-1 ${
            activeTab === "PROBLEMS"
              ? "text-neutral-200 border-b border-sky-500"
              : "text-neutral-400 hover:text-neutral-200"
          }`}
          onClick={() => setActiveTab("PROBLEMS")}
        >
          PROBLEMS <div className="bg-sky-500 w-4 h-4 rounded-full text-neutral-200 text-xs">2</div>
        </button>
        <button
          className={` pb-1 ${
            activeTab === "OUTPUT"
              ? "text-neutral-200 border-b border-sky-500"
              : "text-neutral-400 hover:text-neutral-200"
          }`}
          onClick={() => setActiveTab("OUTPUT")}
        >
          OUTPUT
        </button>
        <button
          className={` pb-1 ${
            activeTab === "TERMINAL"
              ? "text-neutral-200 border-b border-sky-500"
              : "text-neutral-400 hover:text-neutral-200"
          }`}
          onClick={() => setActiveTab("TERMINAL")}
        >
          TERMINAL
        </button>
      </div>

      {/* Tab Content */}
      <div className="">
        {activeTab === "PROBLEMS" && <p>Here are the problems...</p>}
        {activeTab === "OUTPUT" && <p>Here is the output...</p>}
        {activeTab === "TERMINAL" && <p>Here is the terminal...</p>}
      </div>
    </div>
  );
};

export default Terminal;
