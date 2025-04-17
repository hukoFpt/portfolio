import { useState, useEffect, useMemo } from "react";

const Main = () => {
  const roles = useMemo(
    () => [
      "Fullstack Developer",
      "Mobile Developer",
      "System & Network Administrator",
    ],
    []
  );
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < roles[roleIndex].length) {
        setCharIndex((prev) => prev + 1);
        setCurrentRole(roles[roleIndex].slice(0, charIndex + 1));
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
        setCurrentRole(roles[roleIndex].slice(0, charIndex - 1));
      } else if (!isDeleting && charIndex === roles[roleIndex].length) {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles, isPaused]);

  return (
    <div
      className="flex flex-col h-full text-white px-10"
      style={{ fontFamily: "Consolas, monospace" }}
    >
      <h2 className="text-2xl font-semibold pt-16">Oh hi!</h2>
      <h1 className="text-8xl font-bold mt-4">
        This is <span className="text-sky-500">Huko</span>
      </h1>
      <p className="text-4xl font-semibold mt-8 max-w-xl">
        I&apos;m a <span className="text-sky-500">{currentRole}</span>
        <span className={`ml-1 ${isPaused ? "animate-blink" : ""}`}>|</span>
      </p>
      <p className="text-xl font-medium mt-4 max-w-xl">
        Primarily engage in front-end development using React, React Native,
        Next.js, & Typescript and like to explore.
      </p>
      <p className="text-xl font-medium mt-2 max-w-xl">
        Also have practical experience with technologies such as Node.js,
        MongoDB, Unity and tools like Adobe, Android Studio & Figma.
      </p>
    </div>
  );
};

export default Main;
