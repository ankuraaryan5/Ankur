import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectForm from "./ProjectForm";
import Blogger from "./Blogger";

const Dashboard = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1>Dashboard</h1>
      <div className="flex justify-center items-center w-full md:flex-row flex-col">
        <div className="flex flex-col justify-center items-center gap-4 w-full md:w-1/2">
        <ProjectForm />
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/2">
        <Blogger />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
