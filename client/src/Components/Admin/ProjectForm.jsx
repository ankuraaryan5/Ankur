import React,{useState} from 'react'

function ProjectForm() {
    const [state, setState] = useState({
        name: "",
        description: "",
        technologies: "",
        githubLink: "",
        liveLink: "",
        imgSrc: "",
      });
    
      const addProject = async (e) => {
        e.preventDefault();
        console.log(state);
        try {
          const res = await axios.post("http://localhost:5000/create", state);
          console.log(res);
        } catch (err) {
          console.log(err);
        }    
      };
  return (
    <form onSubmit={addProject} className='flex flex-col justify-center items-center gap-4 w-full '>
        <h1 >Add a Project</h1>
      <input type="text" name="name" placeholder="Project Name" onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })} className='w-1/2 ' />
      <input type="text" name="description" placeholder="Project Description" onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })} className='w-1/2 ' />
      <input type="text" name="technologies" placeholder="Technologies" onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })} className='w-1/2 ' />
      <input type="url" name="githubLink" placeholder="Github Link" onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })} className='w-1/2 '/>
      <input type="url" name="liveLink" placeholder="Live Link" onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })} className='w-1/2 ' />
      <input type="file" name="imgSrc" placeholder="Image Source" onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })} className='w-1/2 p-2 ' />
      <button type='submit' className='bg-blue-500 text-white p-2 rounded-lg'>Add a Project</button>   
      </form>
  )
}

export default ProjectForm