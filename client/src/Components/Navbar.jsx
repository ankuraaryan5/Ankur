import React from "react";
import { Link } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[10vh] px-4 w-full ">
      <div className="flex justify-center items-start">
        <h1 className="text-3xl md:text-5xl font-bold">Ankur</h1>
      </div>

      <div className="flex justify-center items-center gap-4">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blogs">Blogs</Link>
      </div>
      <div className="flex justify-center items-end gap-1">
        <Link>
          <CiLinkedin className="text-2xl cursor-pointer text-blue-500" />
        </Link>
        <Link>
          <FaGithub className="text-2xl cursor-pointer" />
        </Link>
        <Link>
          <FaXTwitter className="text-2xl cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
