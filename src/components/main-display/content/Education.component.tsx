import { useEffect, useState } from "react";
import { subjects } from "@/data/subjectData";

const Education = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Delay to trigger the animation
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <div
        className="flex flex-col h-full text-white px-10 pt-5"
        style={{ fontFamily: "Consolas, monospace" }}
      >
        <h1 className="text-4xl font-bold mb-4">{"<Education />"}</h1>
        <p className="text-3xl">I graduated from FPT University</p>
        <p className="pt-2 text-lg text-sky-500">
          Bachelor of Software Engineering
          <span className="pt-2 text-lg text-gray-300">
            {" "}
            - Graduated in 2025
          </span>
        </p>
        <p className="text-3xl pt-5">What I learned:</p>
        <div className="flex flex-col items-start">
          {subjects.map((subject, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="relative">
                <span
                  className={`absolute inset-0 top-5 bg-sky-600 transition-all duration-1000 ${
                    isLoaded ? "w-full" : "w-0"
                  }`}
                  style={{
                    height: "0.3em",
                    zIndex: 0,
                  }}
                ></span>
                <span className="relative z-10 text-lg font-semibold">
                  {subject.title}
                </span>
              </div>
              <p className="ml-4 pl-5 border-l-2 border-l-white pb-4">
                {subject.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
