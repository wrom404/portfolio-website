import { Project } from "../types/types";

const CardProject = ({ project }: { project: Project }) => {

  return (
    <div className="w-96 min-h-96 bg-[#121224] p-4 text-gray-100 rounded-lg">
      <div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <div className="overflow-hidden rounded-md">
            <img
              src={project.img}
              alt={project.title}
              className="w-full transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </a>
      </div>

      <div className="text-sm w-full py-6">
        {project.technologies.map((tech) => (
          <span className="text-xs text-gray-400 bg-[var(--background-color)] py-1 px-2 mr-1 rounded-md">{tech}</span>
        ))}
      </div>
      <div>
        <div className="text-lg text-gray-100">{project.title}</div>
        <div className="text-base mt-2 text-gray-300">
          {project.description}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
