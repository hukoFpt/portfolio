import { useState } from "react";
import { Entity } from "./explorer/Entity.component";

type Props = {
  activeEntity: string | null;
  setActiveEntity: (entity: string) => void;
};

const Explorer = ({ activeEntity, setActiveEntity }: Props) => {
  const [isAboutOpen, setIsAboutOpen] = useState(true);
  const [isProjectsOpen, setIsProjectsOpen] = useState(true);

  const handleEntityClick = (entity: string, type: string) => {
    if (type !== "folder") {
      setActiveEntity(entity); 
    }
  };

  const toggleAboutFolder = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  const toggleProjectsFolder = () => {
    setIsProjectsOpen(!isProjectsOpen);
  };

  return (
    <div className="w-1/6 text-neutral-300 border-r border-zinc-700">
      <p className="text-xs pt-3.5 px-5 mb-2">EXPLORER</p>
      <Entity
        tab={0}
        name="about"
        type="folder"
        isActivated={activeEntity === "about"}
        onClick={() => toggleAboutFolder()}
        isOpen={isAboutOpen}
        icon="/about-folder.icon.png"
      />
      {isAboutOpen && (
        <>
          <Entity
            tab={1}
            name="index.tsx"
            type="file"
            isActivated={activeEntity === "index.tsx"}
            onClick={() => handleEntityClick("index.tsx", "file")}
            icon="/react-ts.icon.png"
            isSubEntity={true}
          />
          <Entity
            tab={1}
            name="education.tsx"
            type="file"
            isActivated={activeEntity === "education.tsx"}
            onClick={() => handleEntityClick("education.tsx", "file")}
            icon="/react-ts.icon.png"
            isSubEntity={true}
          />
          <Entity
            tab={1}
            name="experience.tsx"
            type="file"
            isActivated={activeEntity === "experience.tsx"}
            onClick={() => handleEntityClick("experience.tsx", "file")}
            icon="/react-ts.icon.png"
            isSubEntity={true}
          />
          <Entity
            tab={1}
            name="skills.tsx"
            type="file"
            isActivated={activeEntity === "skills.tsx"}
            onClick={() => handleEntityClick("skills.tsx", "file")}
            icon="/react-ts.icon.png"
            isSubEntity={true}
          />
        </>
      )}
      <Entity
        tab={0}
        name="projects"
        type="folder"
        isActivated={activeEntity === "projects"}
        onClick={() => toggleProjectsFolder()}
        isOpen={isProjectsOpen}
        icon="/project-folder.icon.png"
      />
      {isProjectsOpen && (
        <Entity
          tab={1}
          name="index.project.tsx"
          type="file"
          isActivated={activeEntity === "project.tsx"}
          onClick={() => handleEntityClick("project.tsx", "file")}
          icon="/react-ts.icon.png"
          isSubEntity={true}
        />
      )}
      <Entity
        tab={0}
        name="main.tsx"
        type="file"
        isActivated={activeEntity === "main.tsx"}
        onClick={() => handleEntityClick("main.tsx", "file")}
        icon="/react-ts.icon.png"
      />
      <Entity
        tab={0}
        name="README.md"
        type="file"
        isActivated={activeEntity === "README.md"}
        onClick={() => handleEntityClick("README.md", "file")}
        icon="/README.icon.png"
      />
    </div>
  );
};

export default Explorer;