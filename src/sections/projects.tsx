import CardProject from "../components/card-project";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
      id="projects"
    >
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8 text-center my-6">
        {`My {dev} Projects`}
      </h2>
      <div className="flex gap-5 text-gray-400">
        {projects.map((project) => (
          <CardProject project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
