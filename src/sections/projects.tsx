import CardProject from "../components/card-project";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      className="min-h-screen max-w-7xl mx-auto flex flex-col justify-center items-center sm:px-8"
      id="projects"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 text-center mt-10 mb-4">
        Recent Projects
      </h2>
      <h3 className="text-base text-gray-400 mb-10 text-center">
        Check out some of my recent projects
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
            viewport={{ amount: 0.5, once: true }}
            className="w-full max-w-md"
          >
            <CardProject project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
