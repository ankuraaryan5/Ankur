import React from "react";
import { Link, useParams } from "react-router-dom";
const Projects = () => {
  const projectData = [
    {
      name: "zeptoX",
      subHeader:
        "A web-based platform for finding teachers or students for private Tuitions.",
      description: [
        "Developed a web-based platform using React and Bootstrap to facilitate finding teachers or students for private tuition.",
        "Integrated EmailJS for real-time updates on user-generated interests, enhancing user engagement.",
        "Implemented Google Firebase for secure authentication and storage of user information.",
        "Integrated RazorPay payment gateway.",
        "Ensured the website is user-friendly, prioritizing intuitive navigation and clear interfaces.",
      ],
      technologies: [
        "React.js",
        "Bootstrap",
        "EmailJS",
        "RazorPay",
        "Firebase",
      ],
      link: "https://zeptox.vercel.app/",
      imgSrc: "https://picsum.photos/200/300",
    },
    {
      name: "C Gate",
      subHeader: "A one stop platform for GATE preparation",
      description: [
        "A platform made for aspirants preparing for GATE, providing them with all the resources and tutorials.",
        "Offers practice tests and quizzes to help aspirants assess their knowledge and improve problem-solving skills.",
        " Designed with a simple and intuitive interface, making it easy to navigate and find relevant content.",
        " Includes over 500 practice questions across various subjects, categorized for targeted learning",
        "Features detailed analytics and progress tracking to help students monitor their performance and identify areas for improvement.",
      ],
      technologies: [
        "React.js",
        "MongoDB",
        "Express.js",
        "Redux",
        "Tailwind",
        "Vercel",
        "GitHub",
        "JWT",
      ],
      link: "https://c-gate-orcin.vercel.app/",
      imgSrc: "https://picsum.photos/200/300",
    },
    {
      name: "JanJagran Manch",
      subHeader: "A freelance project",
      description: [
        "A responsive frontend freelance project to enhance clients' online presence, ensuring efficient performance on various devices.",
        "Implemented a mobile-first approach to prioritize user experience on smartphones and tablets, leading to a highly responsive design.",
        "Utilized React and TailwindCSS to create an interactive and visually appealing user interface.",
        "Successfully hosted the website using GoDaddy, ensuring reliable uptime and quick loading time for users",
      ],
      technologies: ["React.js", "Tailwind", "Vercel", "GitHub"],
      link: "https://www.janjagran.life/",
      imgSrc: "https://picsum.photos/200/300",
    },
    {
      name: "Admin Dashboard for BookMyStall",
      subHeader: "My in-office industry experience",
      description: [
        "Developed admin dashboard using MERN stack.",
        "Configured routing, database design and authentication/authorization features for role based access to various sections of website",
        "This feature helped the company to smoothen its event management experience, bringing together features like upcoming events, payments status, etc to a single dashboard for better visibility.",
        " Worked in a team environment with design and development teams to understand and implement the required features.",
      ],
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Tailwind",
        "Vercel",
        "GitHub",
      ],
      link: "",
      imgSrc: "https://picsum.photos/200/300",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1>Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={project.imgSrc}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h1 className="text-xl font-bold">{project.name}</h1>
              <h2 className="text-gray-600">{project.subHeader}</h2>
              <div className="mt-2">
                {project.description.map((desc, i) => (
                  <p key={i} className="text-gray-700">
                    {desc}
                  </p>
                ))}
              </div>
              <div className="mt-2">
                <h3 className="font-semibold">Technologies:</h3>
                {project.technologies.map((tech, i) => (
                  <p key={i} className="text-gray-600">
                    {tech}
                  </p>
                ))}
              </div>
              <Link
                to={project.link}
                className="mt-4 inline-block bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
