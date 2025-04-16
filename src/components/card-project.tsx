import { useState } from "react";
import { Project } from "../types/types";

const CardProject = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const techList = project.technologies.join(" • ");

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

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
        <p
          className={`transition-all duration-300 text-gray-400 ${
            isExpanded
              ? "whitespace-normal overflow-visible"
              : "overflow-hidden whitespace-nowrap text-ellipsis"
          }`}
        >
          {techList}
        </p>

        {techList.length > 50 && (
          <button
            onClick={handleExpand}
            className="text-cyan-400 hover:underline text-xs"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        )}
      </div>
      <div>
        <div className="text-lg">{project.title}</div>
        <div className="text-base mt-2 text-gray-300">
          {project.description}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
