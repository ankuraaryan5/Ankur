import Project from '../model/projectModel.js'

export const createProject = async (req, res) => {
    const { name, description, technologies, githubLink, liveLink, imgSrc } = req.body;

    // Check for all required fields
    if (!name || !description || !technologies || !githubLink || !liveLink || !imgSrc) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newProject = new Project({ name, description, technologies, githubLink, liveLink, imgSrc });
    
    try {
        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        console.error(error);
        res.status(409).json({ message: error.message });
    }
};

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: error.message });
    }
};
