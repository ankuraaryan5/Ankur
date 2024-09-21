import React from "react";

const About = () => {
  const skills = [
    "Java",
    "JavaScript",
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind",
    "Material UI",

    "Git",
    "GitHub",
    "Figma",
    "VS Code",
    "Postman",
    "Vercel",
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center gap-2 w-full ">
        <h1 className="text-3xl font-bold">About Me</h1>
        <div className="flex w-full text-start font-semibold">
          Namaste 🙏 I'm Ankur, a Computer Science Engineer from India. With a
          strong command of technologies like JavaScript, React.js, Node.js,
          MongoDB, Express.Js. I specialize in full-stack development, crafting
          both intuitive user interfaces and reliable backend system. My focus
          is always on delivering clean, efficient, and scalable code that
          exceeds users' expectations.
        </div>
        <div className="flex w-full text-start font-semibold">
          Throughout my journey, I've had the opportunity to work on a variety
          of projects, each presenting unique challenge and opportunity for
          learning.
        </div>
        <div className="flex w-full text-start font-semibold">
          Beyond coding, feel free to ask me anything about cricket, current
          affairs and a game of chess.
        </div>
        <div className="flex w-full text-start font-semibold">
          If you're interested in collaborating on a project, feel free
          to reach out—let's turn ideas into impactful solutions together!
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 w-full ">
        <h1 className="text-3xl font-bold text-center">My Skills</h1>
        <div className="flex justify-center items-center gap-2 flex-wrap">
          {skills.map((skill) => (
            <button className="bg-zinc-200 p-2 rounded-xl text-center text-black w-40 hover:bg-gray-300">
              {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
