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
      <div className="flex justify-center items-center w-full gap-4 flex-col md:flex-row">
        <button onClick={handleClick}><Link to="/addProject"  > Add Project</Link></button>
        <button onClick={handleClick}><Link to ="/blogger" >Upload Blog </Link></button>

        {/* <ProjectForm />
      <Blogger /> */}
      </div>
    </div>
  );
};

export default Dashboard;
