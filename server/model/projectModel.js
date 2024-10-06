import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    technologies: {
        type: [String],
        required: true,
    },
    githubLink: {
        type: String,
        required: true,
    },
    liveLink: {
        type: String,
        required: true,
    },
    imgSrc: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Project", projectSchema);
