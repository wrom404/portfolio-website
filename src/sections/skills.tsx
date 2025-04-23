import Card from "../components/card";
import { technologies } from "../data/technologies";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div
      className="min-h-[90vh] flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-8"
      id="skills"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 text-center mt-10 mb-4">
        Technologies
      </h2>
      <p className="text-gray-400 text-center mb-10 px-2 sm:px-0">
        Technologies I'm proficient in and enjoy working with.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: index * 0.05,
            }}
            viewport={{ amount: 0.1, once: true }}
          >
            <Card technology={technology} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
