import React from "react";

function Blogger() {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-4">
    <form action="" className="flex flex-col justify-center items-center gap-4 w-full ">
    <h1>Upload A Blog</h1>
      <input type="title" className="flex w-1/4 p-2 rounded-lg " placeholder="Title"/>
      <input type="text" className="flex justify-center items-center w-3/4 h-64" placeholder="Blog Content" />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Upload Blog</button>
      </form>
    </div>
  );
}

export default Blogger;
