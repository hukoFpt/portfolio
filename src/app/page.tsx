"use client";

import { useState } from "react";
import Explorer from "@/components/Explorer.component";
import { MainDisplay } from "@/components/MainDisplay.component";
import StatusBar from "@/components/StatusBar.component";
import TitleBar from "@/components/TitleBar.component";

export default function Home() {
  const [activeEntity, setActiveEntity] = useState<string | null>("main.tsx");

  return (
    <div className="flex flex-col max-h-screen bg-neutral-900 overflow-hidden">
      <TitleBar />
      <div className="flex flex-grow">
        <Explorer activeEntity={activeEntity} setActiveEntity={setActiveEntity} />
        <MainDisplay data={activeEntity} setActiveEntity={setActiveEntity} />
      </div>
      <StatusBar />
    </div>
  );
}