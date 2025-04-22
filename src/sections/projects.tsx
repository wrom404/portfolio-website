import CardProject from "../components/card-project";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div
      className="min-h-screen h-full flex flex-col justify-center items-center"
      id="projects"
    >
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 text-center mt-6 mb-4">
        Recent Projects
      </h2>
      <h3 className="text-base text-gray-400 mb-10">Check out some of my recent projects</h3>
      <div className="flex gap-5 text-gray-400">
        {projects.map((project) => (
          <CardProject project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
