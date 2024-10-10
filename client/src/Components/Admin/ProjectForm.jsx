import React, { useState } from "react";
import axios from "axios";

function ProjectForm() {
  const [state, setState] = useState({
    name: "",
    description: "",
    technologies: "",
    githubLink: "",
    liveLink: "",
  });

  const [imageFile, setImageFile] = useState(null); // To handle the image file

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]); // Set the selected image file
  };

  const uploadImageToCloudinary = async () => {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "portfolio"); // Cloudinary upload preset

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dv7y2z64o/image/upload",
        formData
      );
      return res.data.secure_url; // Return the image URL from Cloudinary response
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      throw error;
    }
  };

  const addProject = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = "";
      if (imageFile) {
        imageUrl = await uploadImageToCloudinary();
      }

      const newProjectData = {
        ...state,
        imgSrc: imageUrl, // Set the Cloudinary URL to the state
      };
      console.log(newProjectData);
      const res = await axios.post("http://localhost:4000/api/v1/create", newProjectData);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={addProject} className="flex flex-col justify-center items-center gap-4 w-full">
      <h1>Add a Project</h1>
      <input
        type="text"
        name="name"
        placeholder="Project Name"
        onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
        className="w-11/12 p-2 rounded "
      />
      <input
        type="text"
        name="description"
        placeholder="Project Description"
        onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
        className="w-11/12 p-2 rounded "
      />
      <input
        type="text"
        name="technologies"
        placeholder="Technologies"
        onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
        className="w-11/12 p-2 rounded "
      />
      <input
        type="url"
        name="githubLink"
        placeholder="Github Link"
        onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
        className="w-11/12 p-2 rounded "
      />
      <input
        type="url"
        name="liveLink"
        placeholder="Live Link"
        onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
        className="w-11/12 p-2 rounded "
      />
      <input
        type="file"
        name="imgSrc"
        placeholder="Image Source"
        onChange={handleImageChange} // Handle image file change
        className="w-11/12 p-2 rounded p-2 "
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
        Add a Project
      </button>
    </form>
  );
}

export default ProjectForm;
