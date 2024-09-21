import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";

const Landing = () => {
  const [title, setTitle] = useState("");
  const Data = [
    "Programmer",
    "Student",
    "Web Developer",
    "Frontend Developer",
    "MERN Stack Developer",
    "Software Engineer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % Data.length);
    }, 2000);
    setTitle(Data[index]);
    return () => clearInterval(interval);
  }, [index, Data]);
  return (
    <>
      <Navbar />
      <div className="flex justify-around items-center h-[90vh] w-full md:flex-row flex-col-reverse px-10">
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="text-5xl md:text-6xl font-bold">Hi! I am Ankur</h1>
          <div>
            <p className="text-2xl md:text-3xl">I am a {title}</p>
          </div>
          <div className="flex gap-4">
            <button
              className="bg-gray-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1106MI5sU9sppPzsGpd-eXVRysG3UqbzJ/view?usp=drive_link",
                  "_blank"
                )
              }
            >
              My Resume
            </button>
            <button
              className="bg-gray-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNxPFmwFbzLvnbGtfPLpcBVTJslFCmtSLNgqWKKjkCqHLXNbgLZtCvQjKFHlpGRssQXDVB",
                  "_blank"
                )
              }
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="flex justify-center items-start">
          <img
            src="https://avatars.githubusercontent.com/u/86702313?v=4"
            alt=""
            className="w-full md:w-[400px] h-full md:h-[400px] rounded-full"
          />
        </div>
      </div>
      <About />
      <Projects />
    </>
  );
};

export default Landing;
