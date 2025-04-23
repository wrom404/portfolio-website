import { Project } from "../types/types";

const CardProject = ({ project }: { project: Project }) => {
  return (
    <div className="bg-[#121224] p-4 text-gray-100 rounded-lg h-full w-full sm:w-80 md:w-96">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="overflow-hidden rounded-md">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </a>

      <div className="text-sm w-full py-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs text-gray-400 bg-[var(--background-color)] py-1 px-2 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      <div>
        <h4 className="text-lg font-semibold">{project.title}</h4>
        <p className="text-base mt-2 text-gray-300">{project.description}</p>
      </div>
    </div>
  );
};

export default CardProject;
