import { useState, useEffect } from "react";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Delay to trigger the animation
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="flex flex-col h-full text-white px-10 pt-5"
      style={{ fontFamily: "Consolas, monospace" }}
    >
      <h1 className="text-4xl font-bold mb-4">{"<About />"}</h1>
      <p className="text-3xl">
        I&apos;m a{" "}
        <span className="relative inline-block">
          <span
            className={`absolute inset-0 top-5 bg-sky-600 transition-all duration-1000 ${
              isLoaded ? "w-full" : "w-0"
            }`}
            style={{
              height: "0.5em",
              zIndex: 0,
            }}
          ></span>
          <span className="relative text-white transition-colors duration-1000">
            software developer
          </span>
        </span>{" "}
        specialized on{" "}
        <span className="relative inline-block">
          <span
            className={`absolute inset-0 top-5 bg-sky-600 transition-all duration-1000 ${
              isLoaded ? "w-full" : "w-0"
            }`}
            style={{
              height: "0.5em",
              zIndex: 0,
            }}
          ></span>
          <span className="relative text-white transition-colors duration-1000">
            Web Applications
          </span>
        </span>
      </p>
      <p className="pt-5 text-4xl font-semibold">Ngo Gia Thanh</p>
      <p className="pt-4 text-lg text-sky-500">Fullstack Web Developer</p>
      <p className="pt-2 text-lg text-gray-300">
        I excel at building scalable, user-friendly web applications from
        front-end to back-end with modern technologies.
      </p>
      <p className="pt-2 text-lg text-gray-300">
        With a strong foundation in both front-end and back-end development, I
        take pride in crafting seamless, scalable, and efficient web
        applications. From designing intuitive user interfaces to building
        robust server-side architectures, I am confident in delivering
        high-quality solutions that meet modern web standards and exceed user
        expectations.
      </p>
      <p className="pt-4 text-lg text-sky-500">Mobile Developer</p>
      <p className="pt-2 text-lg text-gray-300">
        As a Mobile Developer, I have a growing understanding of building
        functional and responsive mobile applications. While I am still
        improving my skills, I am capable of creating apps that meet user needs
        and provide a solid foundation for further development.
      </p>
      <p className="pt-4 text-lg text-sky-500">
        System & Network Administrator
      </p>
      <p className="pt-2 text-lg text-gray-300">
        As a System & Network Administrator, I have experience in deploying and
        configuring domains, managing DNS records, and setting up network
        routers and modems. I am skilled in ensuring stable and efficient
        network operations while maintaining secure and reliable configurations.
      </p>
      <p className="pt-4 text-lg text-sky-500">Computer Hardware Technician</p>
      <p className="pt-2 text-lg text-gray-300">
        As a Computer Hardware Technician, I have hands-on experience in
        assembling, diagnosing, and repairing computer systems. From building
        custom PCs to troubleshooting hardware issues, I ensure optimal
        performance and reliability. My expertise also includes upgrading
        components and maintaining hardware to meet user needs effectively.
      </p>
      <p className="pt-4 text-lg text-sky-500">| Language</p>
      <div className="flex gap-4 pt-2 text-lg text-gray-300">
        <p>Vietnamese - Native</p>
        <p>|</p>
        <p>English - Advanced</p>
      </div>
    </div>
  );
};
export default About;
