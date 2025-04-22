import Card from "../components/card";
import { technologies } from "../data/technologies";

const Skills = () => {
  return (
    <div
      className="min-h-[90vh] flex flex-col justify-center items-center"
      id="skills"
    >
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 text-center mt-6 mb-4">
        Technologies
      </h2>
      <p className="text-gray-400 mb-10">
        Technologies I'm proficient in and enjoy working with.
      </p>
      <div className="grid grid-cols-6 gap-4">
        {technologies.map((technology) => (
          <Card technology={technology} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
